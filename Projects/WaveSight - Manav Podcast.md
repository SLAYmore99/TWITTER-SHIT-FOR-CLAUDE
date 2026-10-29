# WaveSight - Manav Podcast

**Client:** [[Manav Podcast]] (standing rules live there; skill upgrades in [[Manav workflow upgrade (skills)]])
**Status (2026-10-24, later):** Drafts renamed by Rachit to **v7** (`EXPORT\wavesight v7 box frame.mp4` = v6.6 A, `EXPORT\Wavesight v7 full screen.mp4` = v6.6 B). Editable Premiere package for Ashish: `MANAV2\PREMIERE_v7\WaveSight - Manav Podcast (editable v7).xml` (one clean clip per shot, captions/tags/logo/bug as PNG layers, option B windows on a disabled track, raw sources + reference drafts as disabled clips, no effects/keyframes). Earlier: **Status (2026-10-24):** Draft **v6.5**: captions re-synced to MEASURED word timings (old ones were syllable-interpolated between pauses and ran up to 0.5 s early at 17-23 s). Cuts moved onto their words: window 2 16.24-20.14, drill 20.14 ("like accidentally cutting"), scan reveal 21.15-21.70 (done on "hidden"), window 3 21.70-24.72 (3.02 s), BILLIONS lands 24.75 on the word. `EXPORT\WaveSight_Manav_draft_v6.5_A_wide-cards.mp4` (+ B full-screen). Earlier: **Status (2026-10-23):** Draft **v6.4** (A and B) = v6.3 with the title background blur raised 6 -> 16 px (Rachit: "blur it more"); `MANAV2\EXPORT\WaveSight_Manav_draft_v6.4_A_wide-cards.mp4` / `..._v6.4_B_fullscreen.mp4`. Only 2.84-3.94 s differs from v6.3; audio identical. Earlier: **Status (2026-10-23, later):** Draft **v6.3** (A and B) = v6.2 + the background of the WaveSight title animation (2.84-3.94 s) lightly blurred (Gaussian 6 px, per Ashish: maybe what the client meant); nothing else changed. `MANAV2\EXPORT\WaveSight_Manav_draft_v6.3_A_wide-cards.mp4` / `..._v6.3_B_fullscreen.mp4`. Earlier: **Status (2026-10-23):** Frame.io round 3 (Ashish, on v6.1) applied: **two options** delivered, `MANAV2\EXPORT\WaveSight_Manav_draft_v6.2_A_wide-cards.mp4` (cards widened to the full safe width, 960 px, 60 px margins) and `..._v6.2_B_fullscreen.mp4` (Manav full-screen, face-centred, no frame). Both 28.76 s (719 frames), no CTA. AE project and Premiere XML NOT updated (Rachit: leave them). Earlier: **Status (2026-10-22, 02:40):** Full reel as an editable After Effects project: `MANAV2\AE_FULL_REEL\WS_build_FULL_reel.jsx` + `assets\` (21 files), zipped as `MANAV2\WaveSight_AE_full_reel_for_Ashish.zip` (173 MB) for Ashish. Premiere XML v5.1 imports in Premiere 2026 (tested live) but with fixed framing (no keyframes) and cut-in scan reveals.  Earlier: **Status (2026-10-22):** Draft **v6.1** = `MANAV2\EXPORT\WaveSight_Manav_draft_v6.1.mp4`: Manav face-tracked (centred every frame; v6 was off-centre) and the 3 windows are back inside the SQUARE CARD (Rachit's note), not full-frame. Premiere XML now `FILES\WaveSight - Manav Podcast (editable v5.1).xml` (script v5.1, README update). Earlier line: draft **v6** = `MANAV2\EXPORT\WaveSight_Manav_draft_v6.mp4`: new horizontal A-roll from the client (`EXPORT\aroll new 1920x1080.mp4`, 1920x1080, 25 fps, 33.92 s, same audio/pacing as before, one unbroken take) + client note "show me 3 times, 3 seconds each, not just B-roll edits". Manav now full-frame at 7.36-10.48, 16.24-19.68, 21.96-24.96 (9:16 slice of the 16:9, face-centred, bottom shade for caption legibility) plus the hook split bottom half; the two A-roll cards, chiselling, soldering stand-in and workers shots were dropped. Premiere `FILES\WaveSight - Manav Podcast (editable v5).xml` (+ import script now v5, README v6 section, C1/C2 SRTs); AE comps unchanged. Previous files in `FILES\_old v5.1`. Frame.io rounds 1-2 (Ashish) were done in v4-v5.1; awaiting Rachit QC of v6.
**Next:** Rachit's notes on draft v1; lock word timings properly (speech-to-text unavailable, times are from audio pauses); open questions on A-roll amount and CTA vs loop ending.

## Current state
- Script: Google Doc "WaveSight". Story: a camera that sees through walls, WaveSight by Applied Electrodynamics (YC startup). Radio waves pass through walls, bounce off pipes, wiring, steel framing. Prevents costly mistakes in construction / manufacturing (cutting into hidden pipes or wires, billions a year). CTA: "Follow for more breakthrough stories like this."
- Sources in the doc: Instagram reel DbmuqWzk602, runtimewire.com article, x.com/ae_dynamics (+ one status post), ae-dyn.com.
- A-roll (OLD, replaced 2026-10-21 by `EXPORT\aroll new 1920x1080.mp4`, horizontal): `Desktop\Work\2026\FREELANCE\MANAV2\EXPORT\aroll paced.mp4`: 31.04 s, 1080x1920, 25 fps, -15.8 LUFS. Landscape shot letterboxed in the middle of a vertical canvas (black above and below). Presenter in a dark grey studio, black sweater, medium shot, centred. Raw source: `MANAV2\AROLL\AUG52_1080p.mp4` (1920x1080, 35.5 s).
- Project folder: `MANAV2` (AROLL, BROLLS (empty), EXPORT, FILES with `waveisght manav.prproj`). Brand assets reused from `Desktop\Gemini4Argon_Premiere\MANAV GEMINI ARGON\Media\Brand` + Captions (caption style .prtextstyle).
- Spec this time: 25 fps (Gemini was 23.976).
- Templates (from `Desktop\Work\2026\FREELANCE\MANAV 1`):
  - `Templates\*.mogrt`: Manav Keyword / Keyword Medium / Keyword Large, Manav Title Word, Manav Source Tag (+ No Logo). Editable Premiere text.
  - `Media\Aroll\card2_frame.mov` = the SQUARE A-roll card (use this). `card3_frame.mov` = the taller card (the wrong one from v3.1). Both ProRes 4444 alpha, 23.976 fps, black outside the card, transparent inside.
  - `Media\Graphics\transition_sweep.mov` = brand white sweep (diagonal halftone, bottom-left to top-right, ~1 s).
  - `Media\Graphics\logo_manav_podcast.mov` (top right) and `logo_m_bug.mov` (bottom right), animated with alpha.
  - All 23.976 fps: conform to 25 fps.
- Delivery: review cut on Frame.io (Rachit uploads).

## Plan v1 (2026-10-20), 27 shots
- B-roll in `MANAV2\BROLLS`: `Applied Electrodynamics.mp4` = their 87 s launch film (1920x1080, 23.976, AV1); `16123343...mp4` = vertical concrete chiselling; `drilling 1` = hard-hat worker drilling a wall; `drilling 2` = two workers at an opened wall; `drilling 3` = pipes under a sink. File names are misleading.
- Launch film map (real seek times): 0-5.5 retro Mac with burned-in text; 5.8 workshop; 6.4 soldering; 6.8 device top view; 7.3 outlet wall; 8.4-10.6 CEO Bilgehan Avser (lower third burned in); 10.8-11.4 founders at YC sign (clean), then burned-in logos; 28-46 paper-card explainer (RF card 40.7-46); 46.3-48.5 RF scan grid; 49-61 CEO with burned-in labels; 61.5-66.5 product reveal; 67-75 real scans with a burned-in caption at the bottom (crop above it); 83.5-86 logo outro. The 1 fps contact-sheet labels run ~0.5 s early; use real seeks.
- Hook 0-7.3: match-cut device opener (THIS CAMERA) -> outlet wall -> logo-stripe reveal into the RF scan (THROUGH WALLS, climax 1) -> split with RF diagram -> sweep into WaveSight title -> YC founders split -> AE logo hit.
- Body: RF card, diagram, opened wall, scan grid, list ping-pong (pipes / wiring / steel framing), sweep, construction shots, drill -> stripe-reveal callback (climax 2), BILLIONS payoff (no slides), product hero, CTA.
- Line times from audio pauses (±0.15 s): S1 0-3.85, S2 3.95-7.3, S3 7.4-16.2, S4 16.25-26.05, S5 26.1-28.7, CTA line 28.85-30.95. Lock to words at build (no speech-to-text available on either machine).
- Gaps: steel framing shot (missing), manufacturing (stand-in), "billions every year" claim to check.

## Plan v2 changes (2026-10-20, after [[Lessons - Manav Podcast (Gemini 4 Argon)]] "published shorts" section)
- A-roll cards cut from 4 to 2 (16, 23). Shot 08 is now the Visible Light card (AE 34.3-36.0), shot 25 the CEO holding the device (AE 60.3-61.3).
- Steel-framing gap filled by a new exploded-wall graphic in the channel's blueprint-blue 3D look (shots 11 and 15; steel stud glows red on 15).
- Logo hit (07) over the CEO's darkened, punched-in face (AE 9.0-10.4, crop above burned-in name).
- BILLIONS (24) in the top third, still, over darkened construction clips swapping underneath.
- Hook split (04) changes its top half at ~2.9 s so no frame holds over ~1 s.
- Open questions: drop A-roll further? Keep CTA card or end on a looping wide shot like the live shorts?

## Draft v1 build notes (2026-10-20)
- Built by a Python frame compositor in the cloud workspace (render.py), not Premiere. Fonts: Inter Bold / ExtraBold as stand-ins for Helvetica Neue Bold.
- Logomark centring (Rachit's note on the first and second-last frames): measured the mark in the launch film (63.6-66.2 s at x 864, y 561, ~214 px wide; 6.85 s at 856, 454; 84.0 s at 437, 540) and placed it at x 540. Checked in the render: centre x 537-540 on every opener frame, the title and the product hero.
- Their launch film already has a scan of the same outlet wall at 7.8-8.3 s (wall at 7.1-7.7 s). The hook's stripe reveal uses it, lined up with the wall.
- CTA_Manav_V7 plays in full (5.06 s), so the reel runs past the voice (31.04 s) to 33.9 s.
- CEO-with-device shot is clean only up to ~61.25 s in the launch film (then a black teaser shot).

## Client notes (2026-10-20, original Hinglish translated)
1. Horizontal 1080p B-rolls: scale 85%. Duplicate it, put the copy behind, opacity 50%, Gaussian blur (default settings). Client said "in After Effects"; to be built natively in Premiere (no Dynamic Link rule).
2. When a logo is shown: exposure up/down with a slide-up, like the Top Gear logo in youtube.com/shorts/84q7ANdzH0M (from ~4 s).
3. Add a shine effect once or twice.
4. Match motion cuts too.
5. Give the hook your best.
6. "baaki brolls works half ke baad" — meaning unclear, asked Rachit.
7. Source logos/tags go in later, not now.
8. Build the rest, then send on Frame.io and we'll review.

## Open
- Client-note doubts parked (Rachit clarifies later). Work from the current reading of the notes; don't guess beyond it.
- Still needed: B-roll files (coming). Logo: taken from appliedelectrodynamics.com (2026-10-20), in `MANAV2\LOGOS`:
  - `AE_logomark_offwhite.svg` / `AE_logomark_dark.svg`: the official vector mark (striped sphere), straight from the site's own file. Off-white #F4F3EF is the colour the site uses on its dark background.
  - `AE_logomark_*_2000.png`: 2000x2000 transparent renders.
  - `AE_lockup_offwhite_raster.png`: mark + "APPLIED / ELECTRODYNAMICS" wordmark, 764x180, captured from the site and keyed to transparent. Raster: don't scale above ~100%.
  - Wordmark font is Söhne (400, tracking 0.2em, two lines). Commercial font, likely not on Rachit's PC.
  - Ignore `AE_Dynamics_logo.png` (first one, discarded).
- No SFX, no music in this edit. XML handoff later, not now.

## Log
- 2026-10-20: brief, script and client notes received.
- 2026-10-20: A-roll, templates, logo and B-roll in. Edit plan v1 (27-shot grid) sent.
- 2026-10-20: studied the 3 live shorts on @manavgolecha; plan v2 sent.
- 2026-10-21: editable Premiere XML built (Rachit: nothing rendered, not even text; B-roll and its blur bg on separate tracks; XML in MANAV2\FILES, links to MANAV2 media).
- 2026-10-20: draft v3 rendered (centring fixes).
- 2026-10-20: draft v2 rendered after Rachit's notes (black frames on slides, caption alignment, font) and the reference re-check.
- 2026-10-20: draft v1 MP4 rendered (logomark centred on first and second-last shots).

Related: [[Manav Podcast]], [[Lessons - Manav Podcast (Gemini 4 Argon)]], [[Manav workflow upgrade (skills)]]
- 2026-10-21: AE build v1 (ae-editable-build skill): ES3 parse + strict mock x2 clean, parity 677 samples max 0.038 px. XML v2 + Premiere import script (tested on a DOM mock only). Waiting for Rachit's first real run - ask for WS_build_log.txt / WaveSight_premiere_import_log.txt if anything fails.

## Frame.io round 1 (2026-10-21, Ashish Patel, review link f.io/tLBTiTwJ on "MaNAV V1.mp4" = draft v3)
Hinglish notes, what they meant, what was done:
- #1 0:00:11 "remove this hook, Manav in split screen, use the starting frame of the video I'm sending + an arrow" -> opener removed; split from frame 1: Being Invested post first frame (top) + arrow, Manav below.
- #2 0:01:20 "same split, remove THROUGH WALLS text, keep the B-roll till here" -> wall + their scan in the top half, no text.
- #3 0:02:14 "more B-rolls, I'm sending a 4K file" -> 4K launch film (EXPORT\applied-electrodynamics-...mp4) now used everywhere; device top view replaces the reused RF diagram.
- #4 0:02:21 "Manav's frame glitches" -> jump cuts in the paced A-roll (2.84, 3.88, 5.84, 8.60, 11.80, 14.64, 15.20, 20.16, 22.28, 23.40 s). Cuts now land exactly on them while the A-roll is visible.
- #5 0:03:13 "another bg + the reference text animation" -> blurred device bg; reference = Top Gear logo in youtube.com/shorts/84q7ANdzH0M ~4.3 s: rises from the bottom, exponential settle to centre, on/off exposure flicker ~0.55 s, heavily blurred bg.
- #9 0:04:04 "top images change too fast, keep two" -> 2 images ~1 s each (CEO workshop 49 s, founders 10.55-11.15 s; logos burn in from 11.2 s).
- #6 0:04:10 "use the captions I send, not animated" -> plain static captions; Rachit styles them.
- #7 0:06:08 "glow shows edges + same text animation" -> glow padded before blur; logo uses the reference animation.
- #10 0:07:13 "add source if you have it" -> source tags (Manav template look: top-left "Source - ..." Helvetica Neue Medium ~30 px).
- #8 0:14:21 "cuts too fast" -> 55 px/frame, k 0.72.  #11 0:17:10 "motion cut wherever A-roll is used" -> cards slide in/out.
- #12/#13 0:21 "frame glitch / don't reuse B-rolls, they'll notice" -> one continuous drill shot; zero repeats (each stock clip once, each film scene once).
- #14 0:23:12 "smoother cut, extend time" -> long smooth card slide (60 px/frame, k 0.82).
- Rachit: last B-roll -> device on a bag scanning inside it (Being Invested video 9.30-10.92 s).
- 2026-10-21: Frame.io round 1 applied: draft v4 + XML v3 + AE build v2 delivered; XML checked by simulating it frame by frame against the render.
- 2026-10-21: v4.1: Rachit didn't want the Being Invested banner text + emoji in the hook. Hook top now shows only the device (rows 600-1194 of their first frame) over a blurred fill; XML + AE arrow synced.

## Frame.io round 2 (2026-10-21, Ashish, on "wavesight v2.mp4" = draft v4.1)
- #1 3:23 "logo ni h idhar" -> m bug on from frame 1.  #2/#3 title: brand font Space Grotesk SemiBold, bg = opening retro-TV shot of their film (0.2 s), whole TV, screen centred lower, top edge faded.
- #4 CEO split centred (x 940 in the 4K frame).  #6 logo-hit bg inside one CEO shot (8.6 s; cut at 10.45).  #10 source tag: YT logo after "Source -", Helvetica Neue Bold.
- #7/#8 glitches = shots running across source cuts. #9 BILLIONS bg -> Being Invested opened-wall footage (6.42 s).
- Glitch scan found 3 more: 0.66 (wall started 7.10 < cut 7.125), 8.28 (visible light crossed 35.21), 10.32 (diagram crossed 44.46).
- Launch-film cut points (4K): 6.367, 6.742, 7.125, 8.409, 10.452, 10.483, 35.21, 44.459, 46.283, 48.883, 72.0, 30.084.
- Delivered draft v5 (EXPORT), XML v4, AE build v3, AE_RENDERS refreshed (my renders, matching v5).

- 2026-10-21: v5.1 (Rachit): title shows the whole iMac centred (scale 1.18, iMac x 530-1370 / y 230-990 of the film frame) with WaveSight settling at y 470 above it, top+bottom fade; source tag YT logo centred on cap height, 14 px gaps; all PIL text now uses RAQM kerning (Helvetica Neue looked off without it). XML v4 + AE v3 + AE_RENDERS synced.


## Client note + new A-roll (2026-10-21 night)
- Client: "You need to show me 3 times in the video for 3 seconds each, I dont want to see just broll edits." Plan = 3 full-frame Manav windows of at least 3 s, each on a spoken beat: (1) 7.36-10.48 "Unlike a regular camera, this thing uses radio waves"; (2) 16.24-19.68 "That means WaveSight can prevent expensive mistakes in construction and manufacturing"; (3) 21.96-24.96 "mid-project, something that costs the industry" (BILLIONS lands right after on the word). The CTA end card has no Manav, so it does not count.
- Between windows: RF diagram 10.48-11.80, wall layers, list, drill 19.68-21.15 + scan reveal 21.15-21.96 (on "a hidden pipe"), BILLIONS, launch-film CEO, bag scan, CTA. Motion cuts pair same-sign exit/enter with the neighbours.
- New A-roll fit: 1920x1080 take. Hook split bottom half = 864x768 crop x1.25 (face centre x=895). Full windows = 918x1080 crop x1.778 (oversized 1632x1920 so the pan stays inside). Tried a 4:5 panel over a blurred fill: rejected (ghost blurred head/hands echo in the fill). Premiere: Scale 125 / 177.78 %, Position keyed per frame, crop for the split.
- Captions are white and his sweater is off-white: bottom shade (`GRAPHICS\MAN_shade_bottom.png`, V6) darkens the lower frame 0-42 %.
- XML v5 simulated against v6 at 12 timestamps: match. Scale bug caught by the simulator (used 151 % instead of 177.78 %).

## v6.1 fixes (2026-10-22)
- Rachit: A-roll not centred in the first shot and at 0:24; windows must sit inside the square card like the previous A-roll version. Cause: fixed crop centre (895) vs real head x ~960 +/- 40. Fix: head x tracked per frame (sweater + hair anchor, smoothed) -> face-centred crops; XML keys crop/position per frame. Windows = card_sq (1080 square slice -> 724 card, same slides). OpenCV Haar was not available (cv2 5.0 has no cascades, pip offline), so tracking is image-based.

## Premiere 2026 XML import + full AE project (2026-10-22 night)
- XML "project appears to be damaged" causes found by testing in Rachit's Premiere 2026 (computer use): A-roll file used for both picture and the VO audio tracks in a big sequence (fixed: VO from `EXPORT\audio wavesight.wav`, identical); `#`/`&` in the Being Invested filename (fixed: `EXPORT\BeingInvested_wavesight_1080p.mp4` copy); blur/speed params (fixed: copied Premiere's own export: Gaussian Blur `radius`, Time Remap with `graphdict` keys, in/out + clip duration in retimed frames).
- Premiere 2026 placed imported keyframes inconsistently, so the XML now has one fixed value per layer (framing exact, no pans/slides) and the two scan wipes are cut-ins.
- Rachit then asked for the whole reel as an AE project for Ashish: built from the same per-frame model (aefull/gen_full.py + runtime_full.jsx): every shot as layers, 828 sparse linear keys (pans, card slides, face tracking), masks for crops and wipes, Time Stretch for slow-mo, the 6 animation comps nested, captions as text layers, source tags as precomps, VO. Strict mock twice (0 errors, same item counts), ES3 parse ok, mock-recorded layers re-composited vs draft v6.1 = match. Not yet run in real AE.


## Frame.io round 3 (2026-10-23, Ashish/Justin/Garv on V1 = draft v6.1) - applied in v6.2 (A and B)
Timecodes are SS:FF at 25 fps. 10 open comments = 8 real notes + "wrong audio" (old, ignored) + Frame.io's auto "No written reason".
- 0:00 (Justin) + 1:04 (Garv): Manav too zoomed in the hook -> bottom half crop 1134x1008 (x0.95) instead of 864x768 (x1.25), face-tracked.
- 5:15 (Garv): logo reveal with blur bg behind -> Rachit: "make it more blur": logo-hit background blur sigma 3 -> 7 (1/8 res).
- 16:06 (Justin): slide into card 2 too fast -> long smooth slide (60 px/frame, k 0.82) on the card and on the wall graphic leaving before it.
- 18:05 (Garv, drawing): wants two options for the A-roll windows. Rachit: (1) cards enlarged to the safe-margin width, (2) A-roll full-screen, presenter centred. A: card 960x960 at (60,480), frame PNG scaled x1.326, lower half of the card darkened for the caption. B: 918x1080 face-centred crop x1.778 panned inside the frame, bottom shade for the caption.
- 20:10 (Garv): use better footage -> new Pexels clip `BROLLS\pexels wall chaser 6474178 (Tima Miroshnichenko, Pexels licence).mp4` (1080p 25 fps, 7.5 s, free licence, wall chaser cutting a wall), used 0.08-2.36 s for 19.68-21.96 incl. the wiring-scan wipe. Downloaded via Chrome (built-in browser pane cannot save files); Rachit approved Downloads folder access.
- 28:16 + 29:02 (Garv): cut after "thing can do", no CTA: video ends 28.76 s (last word fades out by 28.68, CTA line starts 28.88); audio fade 0.1 s. CTA end card removed.
- Checks run: 0 black / edge frames, per-shot diff vs v6.1 (only the intended shots differ, rest ~0), audio identical to v6.1 up to 28.5 s, visual pass of both videos. Compositor: `scratchpad/v9/render9.py` (MODE=card|full), verifier `verify9.py`.
- Open: YouTube footage not used (ToS); Being Invested footage approval still unconfirmed.

- 2026-10-23 (follow-up): Ashish said to blur the background where the "WaveSight" text comes up. v6.3 = v6.2 with TITLE_BLUR 6 px on the iMac background only (`scratchpad/v10/render10.py`). Checked against v6.2: only 2.84-3.94 differs (shots after 5.84 s identical, audio identical, 0 black/edge frames).
- 2026-10-23: v6.4 = title background blur 16 px (`scratchpad/v11/render11.py`); checked vs v6.3: only the title shot differs, 0 black/edge frames.

## Caption sync fix (2026-10-24, v6.5)
- Rachit: "captions don't seem to be in sync". Cause: words.py timings were never measured (phrase times from pauses, words spread by syllable count).
- Fix: pocketsphinx 5.0.4 forced alignment (wheel fetched via Chrome from PyPI because the workspace package proxy was down, sha256 checked), phrase windows inside measured pauses, two passes agree within 0.09 s, word starts snapped to pause ends; checked against the energy envelope. Words in `scratchpad/v12/words.py`, tools in `scratchpad/align/`.
- All 32 captions start within 1 frame of their first word; captions also break at real breaths (gap >= 0.1 s), e.g. "radio waves" / "that pass straight" / "through walls".
- Lesson: never ship captions from estimated word times; align first.

## Caption split fix (2026-10-24, v6.6)
- Opening captions re-split by hand: "This camera" / "lets you" / "see through walls" / "from across" / "the room." (forced breaks after words 1, 3, 6, 8 via `HARD_BREAK` in `scratchpad/v13/render13.py`). Everything else identical to v6.5.
- Delivered A and B v6.6 to `MANAV2\EXPORT` (719 frames, 28.76 s, 0 black/edge problems, audio unchanged). v6.5 B partial render discarded; B now complete.
- AE project and Premiere XML still not updated (per instruction).

## Premiere XML v7 for Ashish (2026-10-24)
- Rachit asked to update the XML (lifting the earlier "don't update the XML"; AE project still not updated). Built `MANAV2\PREMIERE_v7\` (35 MB): `PLATES\` 22 shot clips + 3 option-B window clips (H.264 CRF 14, rendered by the same compositor `scratchpad/v13/render13.py`, no text/logos), `CAPTIONS\` 33 PNGs + `captions_v7.srt`, `OVERLAYS\` logo, bug, 2 source tags, README.
- Tracks: V1 raw A-roll (disabled), V2 raw B-roll/film (disabled), V3 picture A, V4 picture B windows (disabled), V5 sweep, V6 tags, V7 captions, V8 logo, V9 bug, V10/V11 reference v7 A/B (disabled); A1/A2 VO wav cut at 28.76 s.
- No effects or keyframes in the XML (Premiere 2026 misreads imported keyframes), so it imports exactly. All 71 referenced files checked present on disk.
- Check: XML played back frame by frame from its own media vs the exported drafts: A mean diff 0.86, B 1.02 (compression); only the white sweep differs by one frame (23.976 to 25 fps mapping).
- Rachit's plan: import XML, Project Manager > Collect Files and Copy, send to Ashish.
