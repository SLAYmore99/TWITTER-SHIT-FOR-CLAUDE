# Intro workflow

Proposed v1 (2026-10-15), waiting for Rachit's OK. Built from his rough plan, with review checkpoints added.

## Stages
1. **Topic + promise.** Pick the topic and write one line for the main video it would open ("this video is about X"). The last line of the intro hands off to that. Target 40-50 s and 3-4 contexts (Ref 1 is 90 s with about 7 music pieces, too big for a first practice intro).
2. **Beat-sheet script.** The script as a table: line | context | mood and pulse | planned music join | visual idea. Plan the pauses where music joins happen, before the voiceover exists. **Checkpoint 1:** Claude reads it.
3. **Voiceover (ElevenLabs).** A few deliberate takes, not many (see credits below). Rachit drops the audio in `Desktop\Work\INTROS`; Claude checks pace, pauses and levels.
4. **Storyboard + assets.** One card per beat: the idea, the kind of image, the chapter's look, where the text sits, the source and its licence. Claude finds and ranks candidates with links; Rachit downloads them. **Checkpoint 2:** Claude reviews the board for contrast and variety.
5. **Music brief.** One piece per context: mood, tempo range, how it joins the next. Rachit picks the tracks. Do this before cutting, so cuts can land on the music.
6. **Edit.** First a rough cut of picture + voice, no effects. **Checkpoint 3:** Claude checks cut rhythm (clusters and holds), contrast, and whether the beats land. Then music, SFX, effects. **Checkpoint 4:** Rachit exports an MP4; Claude writes a punch report (cuts, loudness, music switches against the story, hits against cuts, voice level).
7. **Wrap-up.** Lessons go into the vault.

## Tool limits (checked 2026-10-15)
- **ElevenLabs:** not connected. The registry's ElevenLabs connector is described as managing voice agents, so it may not produce plain voiceovers. Check its tools once connected; fallback is that Rachit generates in the web app. Free plan per a third-party pricing guide: 10,000 credits a month (about 10 min of speech), no commercial rights, credit to ElevenLabs required; the $5 Starter plan adds commercial rights. Confirm on elevenlabs.io before publishing anything. A practice intro that is not uploaded is fine.
- **Figma:** Starter plan, View seat, read-only in practice, 20 MCP calls a month ([[Tools and connections]]). Not the home of the storyboard. Optional at the end: Rachit lays out a board, Claude reads it once.
- **Assets:** the workspace cannot download from most sites, so Claude finds and ranks, Rachit downloads.
- **Reviews:** Claude can measure an exported MP4 and make contact sheets. It cannot hear taste, so Rachit judges the music.

Related: [[IDK INTROS]], [[Intro sound flow and asset picking]], [[Tools and connections]]
