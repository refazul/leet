# Concept Ledger - Developer's Diary Blog Topics

> Auto-generated tracking file for code analysis insights.
> Last full scan: 2026-01-23T00:00:00Z
> **Full drafts:** [`blog_drafts.md`](./blog_drafts.md)

---

## Incremental Scan Rules

### Phase 1: State Check
1. Read this ledger
2. Run `git ls-files -s solutions/**/*.py` to get current file hashes
3. Compare against "Previously Scanned" table:
   - **New:** Path exists in git but not in table
   - **Modified:** Path exists but hash differs
   - **Deleted:** Path in table but not in git output
4. Skip unchanged files entirely

### Phase 2: Delta Analysis
1. Read only New/Modified files
2. Apply topic filtering rules:
   - **NO** wiki-style content (if it's in docs paragraph 1, discard)
   - **YES** gotchas: language quirks, memory pitfalls, silent bugs
   - **YES** paradigm shifts: where optimization changes everything
3. **Dedup check:** Before proposing a topic, verify it doesn't overlap with "Existing Topics" below
4. Each topic requires: Hook, Pain Point, Evidence (specific file:line)

### Phase 3: Update Ledger
1. Append new topics to "Backlog" section (not Existing Topics)
2. Write full draft to `blog_drafts.md`
3. Update "Previously Scanned" table with new/changed file hashes
4. Update "Last full scan" timestamp

---

## Existing Topics (Published/In Progress)

### 1. Consecutive Row Detection with Three-Way OR Logic
- **Source:** `solutions/hard/pandas/p601.py:50-54`
- **Hook:** "Your Consecutive Row Detection Is Wrong Because You Think In Loops"
- **Core Insight:** Each qualifying row can be FIRST, MIDDLE, or LAST in a valid sequence
- **Status:** Drafted

### 2. Dense vs First Rank Method for Ties
- **Source:** `solutions/hard/pandas/p185.py:66`
- **Hook:** "`rank(method='dense')` vs `method='first'` — The Bug You'll Ship to Production"
- **Core Insight:** "Top N unique" requires dense ranking; first/average silently break with ties
- **Status:** Drafted

### 3. Backwards Regex Validation Pattern
- **Source:** `solutions/easy/pandas/p1517.py:8`
- **Hook:** "Validate By Destruction: The Backwards Regex Pattern Nobody Teaches"
- **Core Insight:** Remove valid chars and check if empty, instead of positive pattern matching
- **Status:** Drafted

### 4. Double-Join Suffix Confusion
- **Source:** `solutions/hard/pandas/p262.py:81-86`
- **Hook:** "The Double-Join Suffix Nightmare: When `_x` and `_y` Become Ambiguous"
- **Core Insight:** Chained merges produce confusing suffixes that cause silent logic bugs
- **Status:** Drafted

### 5. factorize() as a Sorting Shortcut
- **Source:** `solutions/medium/pandas/p178.py:7-11`
- **Hook:** "`factorize()` Is Not Just For Encoding — It's a Sorting Shortcut"
- **Core Insight:** Pre-sorted data + factorize() gives O(n) ranking without re-sorting
- **Status:** Drafted

---

## Backlog (New Topics Pending Review)

_No new topics pending._

---

## Previously Scanned

| File | Git Hash | Scanned |
|------|----------|---------|
| solutions/easy/pandas/p1050.py | 5aeede2f | 2026-01-23 |
| solutions/easy/pandas/p1280.py | eb760aba | 2026-01-23 |
| solutions/easy/pandas/p1378.py | ff46c60f | 2026-01-23 |
| solutions/easy/pandas/p1484.py | 6e7e0aec | 2026-01-23 |
| solutions/easy/pandas/p1517.py | 50c4337e | 2026-01-23 |
| solutions/easy/pandas/p1527.py | d2e1749c | 2026-01-23 |
| solutions/easy/pandas/p1667.py | d677ad12 | 2026-01-23 |
| solutions/easy/pandas/p1683.py | ff7bfd17 | 2026-01-23 |
| solutions/easy/pandas/p1693.py | 8c898b6a | 2026-01-23 |
| solutions/easy/pandas/p1741.py | 21f6abd2 | 2026-01-23 |
| solutions/easy/pandas/p175.py | 8d143a59 | 2026-01-23 |
| solutions/easy/pandas/p1757.py | b0ee9333 | 2026-01-23 |
| solutions/easy/pandas/p1795.py | d7c63421 | 2026-01-23 |
| solutions/easy/pandas/p181.py | 082d2578 | 2026-01-23 |
| solutions/easy/pandas/p182.py | dc8d91f6 | 2026-01-23 |
| solutions/easy/pandas/p183.py | 504b7322 | 2026-01-23 |
| solutions/easy/pandas/p1873.py | ad03cea2 | 2026-01-23 |
| solutions/easy/pandas/p196.py | 322b4339 | 2026-01-23 |
| solutions/easy/pandas/p2356.py | 6cbadb11 | 2026-01-23 |
| solutions/easy/pandas/p2877.py | 29321b7b | 2026-01-23 |
| solutions/easy/pandas/p2878.py | c2de9851 | 2026-01-23 |
| solutions/easy/pandas/p2879.py | 54443258 | 2026-01-23 |
| solutions/easy/pandas/p2880.py | ca674d2c | 2026-01-23 |
| solutions/easy/pandas/p2881.py | cd029f8d | 2026-01-23 |
| solutions/easy/pandas/p2882.py | 6792e621 | 2026-01-23 |
| solutions/easy/pandas/p2883.py | 44793040 | 2026-01-23 |
| solutions/easy/pandas/p2884.py | 95bf63db | 2026-01-23 |
| solutions/easy/pandas/p2885.py | 2015ab61 | 2026-01-23 |
| solutions/easy/pandas/p2886.py | ca10da1b | 2026-01-23 |
| solutions/easy/pandas/p2887.py | 4524f89a | 2026-01-23 |
| solutions/easy/pandas/p2888.py | 90093a27 | 2026-01-23 |
| solutions/easy/pandas/p2889.py | 0fe73bcf | 2026-01-23 |
| solutions/easy/pandas/p2890.py | 486f82fe | 2026-01-23 |
| solutions/easy/pandas/p2891.py | 5e869711 | 2026-01-23 |
| solutions/easy/pandas/p511.py | 57bade3c | 2026-01-23 |
| solutions/easy/pandas/p586.py | a681b5c4 | 2026-01-23 |
| solutions/easy/pandas/p595.py | cf6e9a8c | 2026-01-23 |
| solutions/easy/pandas/p596.py | b299874a | 2026-01-23 |
| solutions/easy/pandas/p607.py | a936498a | 2026-01-23 |
| solutions/easy/python/p1470.py | 43af2102 | 2026-01-23 |
| solutions/easy/python/p1768.py | 1264c29d | 2026-01-23 |
| solutions/easy/python/p1929.py | b8c383f6 | 2026-01-23 |
| solutions/easy/python/p485.py | 286dc604 | 2026-01-23 |
| solutions/hard/pandas/p185.py | f145ac73 | 2026-01-23 |
| solutions/hard/pandas/p262.py | af5885f8 | 2026-01-23 |
| solutions/hard/pandas/p3374.py | dec329d9 | 2026-01-23 |
| solutions/hard/pandas/p601.py | 121fc98f | 2026-01-23 |
| solutions/medium/pandas/p176.py | d23e06d0 | 2026-01-23 |
| solutions/medium/pandas/p177.py | f140c451 | 2026-01-23 |
| solutions/medium/pandas/p178.py | 0ae5204f | 2026-01-23 |
| solutions/medium/pandas/p180.py | 33dc5b09 | 2026-01-23 |
| solutions/medium/pandas/p184.py | 05af3be5 | 2026-01-23 |
| solutions/medium/pandas/p1907.py | a594caad | 2026-01-23 |
| solutions/medium/pandas/p570.py | 3264fc6c | 2026-01-23 |

---

## Quick Reference

**Commands:** See [`common_commands.md`](./common_commands.md)

**Files:**
- `concept_ledger.md` — This file (tracking & rules)
- `blog_drafts.md` — Full topic write-ups
- `common_commands.md` — Available commands

**Hash command:** `git ls-files -s solutions/**/*.py`
