# Gemini 4 Argon - Manav Podcast

**Client:** [[Manav Podcast]] (standing client rules live there)
**Status (2026-10-10):** v3.3 sent to the client. Premiere package for v3.3 delivered. Not yet test-imported in Premiere.
**Next:** refine the motion cut, then add music (A4 is empty and waiting).

## Current state
- **Latest cut:** `Gemini 4 Argon - Manav Podcast (no music) v3.3.mp4`
- **Premiere package:** `Desktop\Gemini4Argon_Premiere` (171 MB): layered XML + media + README.txt (client rules, shot list)
- **Spec:** 1080x1920, 23.976 fps, ~46 s, voice only, -14 LUFS
- **Render code:** lives in the original edit chat (render2.py, hud.py, with A-roll, B-roll and fonts set up). Re-render changes from there; this session can't.
- **B-roll sources:** `GOOGLE ARGON BROLL` (subfolders: OpenAI Refreshed, GPT-6 Astra, Claude Opus 5.5, Keep thinking with Claude, Ironwood TPU + unboxing, Meet Willow, Gemini 1M context). Most are AV1/VP9, so convert to H.264 for Premiere. The Ironwood unboxing clip has burned-in subtitles.

## The cut (v3.3)
- **0-0.94 s:** match-cut opener. Big "Google" word fixed, Google I/O / Gemini marks swap underneath every ~0.25 s, then a 50/50 split hook.
- **"It beats both":** benchmark bar chart → OpenAI logo (Refreshed film, inverted to dark) on "OpenAI" → Claude logo (Opus 5.5 film) on "Anthropic" → benchmark list on "benchmarks tested". Logo hits are hard cuts.
- **Title screen:** "Gemini 4 Argon" over Google's key art.
- **A-roll:** square rounded card throughout (hook stays split).
- **64K → 1M section (13.5-19.4 s):** HUD graphics. Response streams while a token meter fills and hits 64,000 with an "output limit hit" tag ("≈ 100 pages of text, then it stops") in one continuous shot. Then 64K vs 1M bars ("about 15x more in one go"), then a page stack from ≈100 to ≈1,500 pages. Graphics swap content in place, frame stays. Page counts are estimates (1 token ≈ ¾ word, ~500 words/page), marked ≈ on screen.
- **Memory section:** Ironwood TPU + data-center footage, 300+ TB and 1 PB counters.
- **B-roll:** 41 shots, each ≤ 2 s, 2+ per point. HUD box layouts for UI/product shots.
- **Transitions:** 8 motion-cut slides (X position only), only on idea changes, at 2.6, 4.7, 6.4, 22.5, 24.5, 25.8, 30.9 and 37.4 s. Straight cuts inside a point. Rules in [[Motion rules]].
- **Captions:** Helvetica Neue Bold, word chunks, no full stops. CTA end card uncut.

## Premiere package (v3.3)
- Bins: 01 Sequences / 02 A-roll / 03 B-roll / 04 Graphics / 05 Brand / 06 Audio / 07 Reference.
- A-roll in 2 nests (square card, hook split); card styling sits inside the nest, the main timeline only trims and positions it.
- 11 video tracks. Motion cuts keyframed on Position. Markers on sections and every motion cut.
- **Editable:** captions, titles, source tags (SRTs).
- **Rendered (Premiere text can't do these):** counters, charts, token graphics, logo hits, HUD frames, blurred backgrounds, arrow.
- XML uses absolute paths. If the folder moves, Link Media once.

## Open
- Test the v3.3 XML import in Premiere.
- Leftover transfer files sit in `Desktop\_to_delete` (delete by hand).
- Older v2 layered rebuild in `Desktop\Work\2026\FREELANCE\MANAV 1` predates bins and editable text. Superseded by the v3.3 package, so it can be archived.

## Log
- 2026-10-09/10: v2 delivered, then a layered Premiere rebuild of v2 (no bins, text baked as .mov). That feedback became two standing rules: bins, and editable text ([[Workflow rules]]).
- 2026-10-10: v3. Client round: match-cut opener, B-roll ≤ 2 s, HUD layouts, logo hits, benchmark sequence, no full stops.
- 2026-10-10: v3.1. Motion cut changed to X position only (scale + blur looked cheap).
- 2026-10-10: v3.2. Square card everywhere (I'd used the tall card by mistake). 4 HUD graphics replace generic B-roll in the token section.
- 2026-10-10: v3.3. Slides cut down to 8, idea changes only. Stream + limit merged into one shot. Premiere package delivered.
- Lessons from all rounds: [[Lessons - Manav Podcast (Gemini 4 Argon)]]

Related: [[Gemini 4 Argon - motion graphics]], [[Workflow rules]]
