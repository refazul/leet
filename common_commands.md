# Common Commands

Quick reference for the Developer's Diary workflow.

---

## Scanning & Discovery

| Command | What it does |
|---------|--------------|
| `scan for topics` | Delta scan for all tracks |
| `scan for gotchas` | Delta scan for advanced gotcha topics only |
| `scan for sparks` | Delta scan for beginner spark topics only |
| `what changed` | List new/modified files since last scan |

---

## Viewing Content

| Command | What it does |
|---------|--------------|
| `blog status` | Show counts for all tracks |
| `show gotchas` | List all advanced gotcha hooks |
| `show sparks` | List all beginner spark hooks |
| `show backlog` | List pending ideas (all tracks) |

---

## Quest System

| Command | What it does |
|---------|--------------|
| `quest status` | Show current rank + progress bar |
| `show skills` | List all 51 skills with unlock status |
| `unlock skill N` | Mark skill N as completed |
| `next rank` | Show skills needed to reach next rank |
| `show layer X` | Show skills in a specific layer (foundation/selection/joining/aggregation/transformation/string/mastery) |

---

## Writing

| Command | What it does |
|---------|--------------|
| `draft gotcha N` | Expand gotcha backlog item N |
| `draft spark N` | Expand spark backlog item N |
| `draft quest lesson` | Create a quest-style lesson with progress hooks |

---

## Content Tracks

| Track | Audience | Tone | File |
|-------|----------|------|------|
| **Advanced Gotchas** | Experienced devs | "Here's what breaks" | `blog_drafts.md` |
| **Beginner Sparks** | Curious learners | "Whoa, look at this!" | `beginner_sparks.md` |
| **Pandas Quest** | Progress seekers | "You're 5 skills from Guru" | `pandas_quest.md` |

---

## Quest Ranks

```
🥚 Underdog    (0-9)   → 🐣 Apprentice (10-19)
🐥 Journeyman (20-29) → 🦅 Expert    (30-39)
🦉 Guru       (40-49) → 🐉 Legend    (50-51)
```

---

## File Locations

```
concept_ledger.md   ← Tracking state, rules, topic index
blog_drafts.md      ← Advanced gotcha write-ups
beginner_sparks.md  ← Beginner spark write-ups
pandas_quest.md     ← Skill tree + ranks + progress
common_commands.md  ← This file
```

---

## Examples

```
You: quest status
→ "🐣 Apprentice | 15/51 skills | 5 to Journeyman"

You: show layer aggregation
→ Lists the 10 aggregation skills with unlock status

You: unlock skill 34
→ Marks transform() as learned, updates progress

You: next rank
→ "You need: groupby, agg, count, first, nunique"
```

---

## Quick Start

Forgot everything? Just say: `help` or `what can I do`
