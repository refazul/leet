# Common Commands

Quick reference for the Developer's Diary workflow.

---

## Scanning & Discovery

| Command | What it does |
|---------|--------------|
| `scan for topics` | Delta scan for both tracks (gotchas + sparks) |
| `scan for gotchas` | Delta scan for advanced gotcha topics only |
| `scan for sparks` | Delta scan for beginner spark topics only |
| `what changed` | List new/modified files since last scan |

---

## Viewing Content

| Command | What it does |
|---------|--------------|
| `blog status` | Show counts for both tracks |
| `show gotchas` | List all advanced gotcha hooks |
| `show sparks` | List all beginner spark hooks |
| `show backlog` | List pending ideas (both tracks) |

---

## Writing

| Command | What it does |
|---------|--------------|
| `draft gotcha N` | Expand gotcha backlog item N |
| `draft spark N` | Expand spark backlog item N |

---

## Content Tracks

| Track | Audience | File |
|-------|----------|------|
| **Advanced Gotchas** | Experienced devs hunting bugs | `blog_drafts.md` |
| **Beginner Sparks** | Curious learners wanting "aha!" | `beginner_sparks.md` |

---

## File Locations

```
concept_ledger.md   ← Tracking state, rules, topic index
blog_drafts.md      ← Advanced gotcha write-ups
beginner_sparks.md  ← Beginner spark write-ups
common_commands.md  ← This file
```

---

## Examples

```
You: scan for topics
→ Checks git hashes, analyzes changed files for BOTH tracks

You: show sparks
→ Lists the 10 beginner spark hooks

You: blog status
→ "Advanced: 5 drafted, 0 backlog | Sparks: 10 drafted, 0 backlog"
```

---

## Quick Start

Forgot everything? Just type: `help` or `what can I do`
