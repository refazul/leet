# Common Commands

Quick reference for the Developer's Diary workflow.

---

## Blog Topic Mining

| Command | What it does |
|---------|--------------|
| `scan for topics` | Run delta scan on new/modified files, update ledger |
| `show backlog` | List pending topic ideas not yet drafted |
| `draft topic N` | Write full blog post for backlog item N |

---

## Status & Review

| Command | What it does |
|---------|--------------|
| `blog status` | Show counts: drafted, backlog, files tracked |
| `show topics` | List all existing topic hooks |
| `what changed` | Show new/modified files since last scan |

---

## File Locations

```
concept_ledger.md  — Tracking state, scan rules, topic index
blog_drafts.md     — Full write-ups for each topic
common_commands.md — This file
```

---

## Examples

```
You: scan for topics
→ Checks git hashes, analyzes changed files, updates ledger

You: show topics
→ Lists the 5 current topic hooks

You: draft topic 2
→ Expands backlog item #2 into full blog post
```
