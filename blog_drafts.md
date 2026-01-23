# Developer's Diary - Blog Drafts

> Generated from code analysis of LeetCode solutions.
> Each topic follows the format: Hook → Pain Point → Evidence

---

## Topic 1: Your Consecutive Row Detection Is Wrong Because You Think In Loops

**Status:** Draft
**Source:** `solutions/hard/pandas/p601.py:50-54`, `solutions/medium/pandas/p180.py:4`
**Tags:** #pandas #vectorization #window-functions

### The Pain Point

Developers instinctively write loop-based consecutive detection:
```python
for i in range(len(df) - 2):
    if df[i] >= 100 and df[i+1] >= 100 and df[i+2] >= 100:
        results.append(i, i+1, i+2)
```

This misses a critical insight: when you need to return **all rows that belong to any valid sequence**, each qualifying row can occupy three different positions—FIRST, MIDDLE, or LAST.

### The Evidence

**Hard problem (p601.py:50-54)** — Full three-position logic:
```python
mask = (stadium["people"] >= 100) & (
    ((stadium["people"].shift(-1) >= 100) & (stadium["people"].shift(-2) >= 100))  # I'm FIRST
    | ((stadium["people"].shift(1) >= 100) & (stadium["people"].shift(2) >= 100))  # I'm LAST
    | ((stadium["people"].shift(1) >= 100) & (stadium["people"].shift(-1) >= 100)) # I'm MIDDLE
)
```

**Medium problem (p180.py:4)** — Simplified case (only need MIDDLE):
```python
logs['change'] = (logs['num'] == logs['num'].shift(1)) & (logs['num'] == logs['num'].shift(-1))
```

### The Takeaway

The medium problem only asks "find numbers that appear 3+ times consecutively" — you only need the MIDDLE check. The hard problem asks "return ALL rows belonging to valid sequences" — requiring the full three-way OR. This distinction is the cognitive leap from "works on examples" to "works on edge cases."

---

## Topic 2: `rank(method='dense')` vs `method='first'` — The Bug You'll Ship to Production

**Status:** Draft
**Source:** `solutions/hard/pandas/p185.py:66`
**Tags:** #pandas #ranking #silent-bugs

### The Pain Point

When a problem says "top 3 **unique** salaries," most developers grab `.rank()` and move on. But the default `method='average'` and the common `method='first'` both silently produce wrong answers when ties exist.

Consider salaries: `[90000, 85000, 85000, 70000]`

| Method | Ranks Assigned | "Top 3" Result |
|--------|---------------|----------------|
| `first` | 1, 2, 3, 4 | Excludes 70000 (rank 4) |
| `dense` | 1, 2, 2, 3 | Includes 70000 (rank 3) |

With `method='first'`, two people sharing rank 2 get assigned ranks 2 and 3, pushing the actual third-unique salary to rank 4.

### The Evidence

**p185.py:66:**
```python
employee['rank'] = employee.groupby('departmentId')['salary'].rank(method='dense', ascending=False)
```

The problem explicitly states: "Both Randy and Joe earn the **second-highest unique salary**." Dense ranking keeps them both at rank 2. Any other method breaks this requirement silently—your code runs, tests might pass on small samples, but production data with ties will return wrong results.

### The Takeaway

When you see "unique" or "distinct" in ranking requirements, `method='dense'` is almost always correct. Add this to your code review checklist.

---

## Topic 3: Validate By Destruction — The Backwards Regex Pattern Nobody Teaches

**Status:** Draft
**Source:** `solutions/easy/pandas/p1517.py:4-8`
**Tags:** #regex #validation #pandas-strings

### The Pain Point

The textbook approach to validation is positive matching:
```python
if re.match(r'^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\.com$', email):
    # valid
```

This requires getting anchors, quantifiers, and character classes exactly right. One misplaced `*` or forgotten `^` and you have a security hole.

### The Evidence

**p1517.py:4-8** uses an inverted approach:
```python
filter_1 = users[users['mail'].str.endswith('@leetcode.com')]
filter_2 = filter_1[filter_1['mail'].str[0].str.isalpha()]
filter_3 = filter_2[filter_2['mail'].str[:-13].str.replace('[a-zA-Z0-9_.-]', '', regex=True) == '']
```

The logic:
1. Must end with `@leetcode.com`
2. First character must be alphabetic
3. Extract the prefix (everything before `@leetcode.com` = `str[:-13]`)
4. **Remove all valid characters** with regex replace
5. If result is empty string `''`, all characters were valid

### The Takeaway

Instead of asking "does this match the valid pattern?" ask "if I remove everything valid, is anything left?" This inverts the mental model but eliminates anchor bugs and is often easier to reason about for complex validation rules.

---

## Topic 4: The Double-Join Suffix Nightmare — When `_x` and `_y` Become Ambiguous

**Status:** Draft
**Source:** `solutions/hard/pandas/p262.py:81-86`
**Tags:** #pandas #joins #debugging

### The Pain Point

A self-join produces `_x` and `_y` suffixes on conflicting columns. This is manageable. But chain two joins against the same table and you get suffix soup that's a debugging nightmare.

### The Evidence

**p262.py:81-86:**
```python
table1 = trips.merge(users, how="left", left_on="client_id", right_on="users_id")
table2 = table1.merge(users, how="left", left_on="driver_id", right_on="users_id")

clean_list = table2[
    (table2["banned_x"] == "No")   # Client's ban status? Or driver's?
    & (table2["banned_y"] == "No")
]
```

After two merges against `users`:
- `banned_x` = ban status from first merge (client lookup)
- `banned_y` = ban status from second merge (driver lookup)

But nothing in the column name tells you this. You have to trace the merge order mentally. Swap them by accident? Code still runs. Results silently wrong.

### The Takeaway

For chained merges, either:
1. Rename columns immediately after each merge: `table1.rename(columns={'banned': 'client_banned'})`
2. Use explicit suffixes: `merge(..., suffixes=('_client', '_driver'))`

The default `_x`/`_y` suffixes are a trap for any join beyond the trivial case.

---

## Topic 5: `factorize()` Is Not Just For Encoding — It's a Sorting Shortcut

**Status:** Draft
**Source:** `solutions/medium/pandas/p178.py:7-11`
**Tags:** #pandas #performance #ranking

### The Pain Point

Developers default to `.rank()` for dense ranking. But `rank()` internally sorts data even when you've already sorted it yourself. For large datasets, this is wasted work.

### The Evidence

**p178.py:7-11:**
```python
# Step 1: Aggregate and sort ONCE
rank = scores.groupby('score').agg(
    scr=('score', 'first'),
    count=('id', 'count')
).sort_values(by='score', ascending=False)

# Step 2: Expand rows
rank_expanded = rank.loc[rank.index.repeat(rank['count'])].copy()

# Step 3: Assign ranks via factorize (no re-sort!)
rank_expanded['rank'] = pd.factorize(rank_expanded['scr'])[0] + 1
```

`pd.factorize()` returns `(codes, uniques)` where codes are sequential integers in **encounter order**. Since data is already sorted descending, encounter order equals rank order.

Complexity comparison:
- `.rank(method='dense')`: O(n log n) — always sorts
- `factorize()` on pre-sorted data: O(n) — just assigns integers

### The Takeaway

When you've already sorted your data for other reasons, `factorize()[0] + 1` gives you dense ranks without the sorting overhead. It's a pattern hiding in plain sight in the pandas API.

---

## Appendix: Analysis Rules

These drafts follow strict filtering criteria:

1. **No Wiki-style content** — If it's in the first paragraph of documentation, discard it
2. **Focus on gotchas** — Language quirks, memory pitfalls, edge cases that cause production bugs
3. **Identify the gap** — Where textbook approach is clunky or optimization changes the paradigm
4. **Evidence required** — Every topic must reference specific lines from actual code
