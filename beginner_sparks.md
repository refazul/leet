# Beginner Sparks - Curiosity-First Learning

> Not pain points. Not gotchas. Just "whoa, I didn't know that" moments.
> Format: Hook → The Magic → Input/Output → Try It Yourself

---

## Spark 1: The Merge Type Nobody Knows Exists

**Source:** `solutions/medium/pandas/p1907.py:4`
**Category:** Hidden Parameter

### The Magic

```python
all_combinations = students.merge(subjects, how='cross')
```

### Input → Output

**students:**
| student_id | name  |
|------------|-------|
| 1          | Alice |
| 2          | Bob   |

**subjects:**
| subject_name |
|--------------|
| Math         |
| Physics      |

**Result of `how='cross'`:**
| student_id | name  | subject_name |
|------------|-------|--------------|
| 1          | Alice | Math         |
| 1          | Alice | Physics      |
| 2          | Bob   | Math         |
| 2          | Bob   | Physics      |

Every student × every subject. No join keys needed.

### Why This Matters

When you need "all possible combinations" (like finding which student-subject pairs have NO exam records), this is your tool. Most people write nested loops. You write one line.

---

## Spark 2: Finding ALL Duplicates (Not Just the Extras)

**Source:** `solutions/easy/pandas/p182.py:4`
**Category:** Hidden Parameter

### The Magic

```python
all_dupes = df[df.duplicated(subset=['email'], keep=False)]
```

### Input → Output

**Input:**
| id | email           |
|----|-----------------|
| 1  | a@mail.com      |
| 2  | b@mail.com      |
| 3  | a@mail.com      |

**With `keep='first'` (default behavior):**
| id | email      |
|----|------------|
| 3  | a@mail.com |

Only row 3 marked as duplicate.

**With `keep=False`:**
| id | email      |
|----|------------|
| 1  | a@mail.com |
| 3  | a@mail.com |

BOTH rows with duplicate emails returned.

### Why This Matters

Default `duplicated()` answers "which rows are copies?" `keep=False` answers "which rows have duplicates at all?" — often what you actually need.

---

## Spark 3: Expanding Rows From a Count Column

**Source:** `solutions/medium/pandas/p178.py:9`
**Category:** "I Didn't Know You Could Do That"

### The Magic

```python
expanded = df.loc[df.index.repeat(df['count'])]
```

### Input → Output

**Input:**
| score | count |
|-------|-------|
| 100   | 3     |
| 95    | 2     |

**Output:**
| score | count |
|-------|-------|
| 100   | 3     |
| 100   | 3     |
| 100   | 3     |
| 95    | 2     |
| 95    | 2     |

Each row repeated by its count value.

### Why This Matters

This is the inverse of `groupby().count()`. When you have aggregated data and need to "unroll" it back to individual rows, this one-liner does it.

---

## Spark 4: Transform vs Agg — Same Group, Different Shape

**Source:** `solutions/medium/pandas/p184.py:6`
**Category:** Paradigm Shift

### The Magic

```python
# This FAILS if you want to compare each row to its group's max:
df['max'] = df.groupby('dept')['salary'].max()  # Wrong shape!

# This WORKS:
df['max'] = df.groupby('dept')['salary'].transform('max')
```

### Input → Output

**Input:**
| name  | dept | salary |
|-------|------|--------|
| Alice | IT   | 90000  |
| Bob   | IT   | 80000  |
| Carol | HR   | 70000  |

**With `.transform('max')`:**
| name  | dept | salary | max   |
|-------|------|--------|-------|
| Alice | IT   | 90000  | 90000 |
| Bob   | IT   | 80000  | 90000 |
| Carol | HR   | 70000  | 70000 |

Each row gets its group's max, aligned back to original index.

### Why This Matters

`.agg()` collapses groups → smaller DataFrame.
`.transform()` broadcasts back → same size DataFrame.

Use transform when you need to compare each row to its group.

---

## Spark 5: Reshape Your Entire Table in One Line

**Source:** `solutions/easy/pandas/p1795.py:4`
**Category:** One-Liner Magic

### The Magic

```python
result = pd.melt(products,
                 id_vars=['product_id'],
                 value_vars=['store1', 'store2', 'store3'],
                 var_name='store',
                 value_name='price').dropna()
```

### Input → Output

**Input (wide format):**
| product_id | store1 | store2 | store3 |
|------------|--------|--------|--------|
| 1          | 10     | null   | 15     |
| 2          | null   | 20     | 25     |

**Output (long format):**
| product_id | store  | price |
|------------|--------|-------|
| 1          | store1 | 10    |
| 1          | store3 | 15    |
| 2          | store2 | 20    |
| 2          | store3 | 25    |

Columns become rows. Nulls vanish.

### Why This Matters

Wide-to-long transformation is everywhere: survey responses, time series, pivot table reversal. `melt()` + `dropna()` handles it elegantly.

---

## Spark 6: Look at Neighboring Rows Without Loops

**Source:** `solutions/medium/pandas/p180.py:4`
**Category:** Paradigm Shift

### The Magic

```python
df['same_as_neighbors'] = (df['num'] == df['num'].shift(1)) & (df['num'] == df['num'].shift(-1))
```

### Input → Output

**Input:**
| id | num |
|----|-----|
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |

**Output:**
| id | num | same_as_neighbors |
|----|-----|-------------------|
| 1  | 1   | False             |
| 2  | 1   | True              |
| 3  | 1   | False             |
| 4  | 2   | False             |
| 5  | 1   | False             |

Row 2 is `True` because `num` matches both previous (row 1) and next (row 3).

### Why This Matters

`.shift(1)` = previous row. `.shift(-1)` = next row. Combine with boolean logic to detect patterns across rows — no loops needed.

---

## Spark 7: The Elegant NOT IN

**Source:** `solutions/easy/pandas/p607.py:10`
**Category:** Syntax Sugar

### The Magic

```python
# Instead of this mess:
result = df[df['name'].apply(lambda x: x not in bad_names)]

# Do this:
result = df[~df['name'].isin(bad_names)]
```

### The Breakdown

- `df['name'].isin(bad_names)` → Boolean Series (True where name is in list)
- `~` → Flip all True↔False
- `df[...]` → Filter to only False (names NOT in list)

### Why This Matters

The `~` operator is pandas' NOT. Combined with `.isin()`, you get clean NOT IN logic that reads naturally.

---

## Spark 8: Aggregate to Comma-Separated Unique Values

**Source:** `solutions/easy/pandas/p1484.py:7`
**Category:** One-Liner Magic

### The Magic

```python
result = df.groupby('sell_date').agg(
    products=('product', lambda x: ','.join(sorted(set(x))))
)
```

### Input → Output

**Input:**
| sell_date  | product  |
|------------|----------|
| 2020-05-30 | Headphone|
| 2020-05-30 | Pencil   |
| 2020-05-30 | Pencil   |
| 2020-06-01 | Book     |

**Output:**
| sell_date  | products         |
|------------|------------------|
| 2020-05-30 | Headphone,Pencil |
| 2020-06-01 | Book             |

Duplicates removed, sorted, joined with comma.

### Why This Matters

`set()` → unique, `sorted()` → alphabetical, `','.join()` → string. All in one lambda inside `.agg()`.

---

## Spark 9: Conditional Assignment in One Line

**Source:** `solutions/easy/pandas/p1873.py:8`
**Category:** Syntax Sugar

### The Magic

```python
# Create condition
odd_id = employees['employee_id'] % 2 != 0
not_m_name = ~employees['name'].str.startswith('M')
condition = odd_id & not_m_name

# Assign only where condition is True
employees.loc[condition, 'bonus'] = employees['salary']
```

### The Breakdown

```
employees.loc[condition, 'bonus']
             ↑          ↑
          row filter   column to modify
```

Only rows where `condition=True` get updated. Others unchanged.

### Why This Matters

No loops. No `apply()`. Just targeted assignment using boolean indexing. Fast and readable.

---

## Spark 10: Split Text But Keep the Delimiters

**Source:** `solutions/hard/pandas/p3374.py:68-69`
**Category:** Regex Trick

### The Magic

```python
import re
text = "hello-world test"
parts = re.split(r"([ -])", text)
# Result: ['hello', '-', 'world', ' ', 'test']
```

The parentheses in `([ -])` capture the delimiter, keeping it in the result.

### Applied:

```python
def title_case_preserving_delimiters(text):
    parts = re.split(r"([ -])", text)
    return "".join([p.capitalize() for p in parts])

# "hello-world" → "Hello-World"
# "foo bar" → "Foo Bar"
```

### Why This Matters

Normal `split()` discards delimiters. Capturing split preserves them. Essential for transformations where delimiter position matters.

---

## Index

| # | Spark | Key Concept | File |
|---|-------|-------------|------|
| 1 | Cross merge | `how='cross'` creates all combinations | p1907.py |
| 2 | Keep=False | Find ALL duplicates | p182.py |
| 3 | Index repeat | Expand rows from count | p178.py |
| 4 | Transform vs Agg | Same-size vs collapsed result | p184.py |
| 5 | Melt | Wide to long format | p1795.py |
| 6 | Shift | Look at neighboring rows | p180.py |
| 7 | ~isin() | Elegant NOT IN | p607.py |
| 8 | Lambda in agg | Comma-separated uniques | p1484.py |
| 9 | loc[cond, col] | Conditional assignment | p1873.py |
| 10 | Capturing split | Keep delimiters after split | p3374.py |
