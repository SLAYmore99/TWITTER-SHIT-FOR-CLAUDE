# Workflow rules

Standing instructions for Claude on every edit.

## Delivery
- Premiere handoffs: **no After Effects Dynamic Link** (too heavy for this desktop). Deliver plain clips and transparent layers on a Premiere timeline (XML).
- Premiere project structure: the XML must import already organized into bins: **Sequences** (main sequence + nests), **A-roll**, **B-roll** (sub-bin for full-length sources), **Graphics**, **Captions**, **Brand** (CTA, transitions), **Audio** (VO, music, SFX). Add a bin for any other media type used.
- Premiere text must be **editable**, not baked into .mov files. Captions go on a native Premiere caption track (SRT plus a caption style). Titles, keyword text and source tags are Premiere Essential Graphics text with keyframed animation. Only things Premiere text can't do (number counters, complex charts) may stay rendered, and say which ones they are.
- Premiere packages (Rachit, 2026-10-21): NOTHING rendered, not even text or animations. Footage = original source clips with in/out + keyframes (no pre-cut renders); B-roll and its blurred bg copy on separate tracks; graphics = plain still layers moved with keyframes; all words as editable text (SRT tracks / upgrade to graphics). Media copied into the project folder so every XML path points there.
- Final renders as MP4 unless asked otherwise.

## Footage
- Only footage that's licensed, Creative Commons, or supplied by Rachit/the client.
- Stock sources: Adobe Stock, invideo library, Pexels, Pixabay, Mixkit.

## Process
- Show key frames as a checkpoint before animating a full motion piece.
- Flag on-screen claims that go beyond the sources.
- Before deleting a whole scene from a short feedback note, confirm with a frame of what will go. Keep removed scenes easy to restore.
- Keyword / hero text stays inside the safe area (widest word at most ~75% of frame width).
- After every edit, update the project note in `Projects/`.
- Motion graphics, animation or design jobs: read [[Motion gauntlet]], invoke `motion-video-pipeline`, then load the specialist skills it names and read them fully before building.

## Vault upkeep (every time Claude uses the vault)
- Every note ends with a `Related:` line linking 2-3 relevant notes, and every new note is linked from [[Home]] and from at least one related note. No orphans.
- Use exact note names in `[[links]]`. Never leave a link pointing to a note that doesn't exist. Put `[[ ]]` in backticks when writing about links.
- Project notes keep a **current state** block at the top (status, latest file, next step), then Open items, then a short Log. When something changes, rewrite the top; don't just append. Mark old details as superseded or remove them.
- Rules that apply beyond one project go in Style/, Clients/ or here, not buried in a project log.
- New folder or note type: add a colour group in the graph (`.obsidian/graph.json`) and a line in Home's Map.
- IDK INTROS material (the YouTube intros training: references, sound and asset rules, practice intros) stays in the `IDK INTROS/` folder. Do not file it in Style/, Lessons/ or Projects/.
- Before finishing, check: no broken links, no notes without incoming links, Home's Map matches the files.


## Learning from reference videos (standing rule)
Every time Rachit shares a video (a reference, someone else's draft, a creator's reel), study it on my own without being asked, and update what I know:
1. Go through it frame by frame: contact sheets, every cut, the transitions frame by frame, and a speed/zoom graph (send the graph PNG).
2. Break down B-roll choices line by line (what's shown for each spoken line and why it works), layouts, captions, pacing, motion.
3. Compare with my own version if there is one, and say plainly what they did better and what I did better.
4. Write the new lessons into the vault, marking what confirms an old rule and what changes it. Client-specific lessons go in that client's note in `Lessons/` ([[Lessons - Manav Podcast (Gemini 4 Argon)]], [[Lessons - Rajiv reel (Oct 2026)]]); never mix clients in one note. Only rules for every project go in Style/ ([[Motion cut - how it really works]], [[Motion rules]]).
5. Update the reel-motion-cuts skill text to match (backup in Tools), and tell Rachit what changed.

Related: [[Premiere handoff SOP]], [[Tools and connections]], [[Motion rules]], [[Manav Podcast]], [[Gemini 4 Argon - Manav Podcast]]
