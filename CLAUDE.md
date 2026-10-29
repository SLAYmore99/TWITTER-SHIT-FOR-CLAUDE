# CLAUDE.md - Rachit's video editing (Manav Podcast and all reels)
Auto-built 2026-10-29 from the Obsidian vault by Tools/build_claude_md.py. The vault notes are the source of truth.

## Who / how to work
- Rachit: video editor and photographer, Bengaluru, freelances. Edits in **Premiere Pro**. Portfolio: rachitportfolio99.netlify.app
- Current client: **Manav Podcast** (tech-news short-form, 9:16). Other clients (Rajiv, HackerRank, Kitchen 101) have their own Lessons notes. NEVER mix clients' lessons.
- STANDING: **no After Effects Dynamic Link** in Premiere handoffs (too heavy for his desktop). Plain clips/layers on the timeline (XML).
- STANDING: handoffs keep A-roll, subtitles and animation as **separate layers, each one continuous clip with no cuts**, so he can adjust by hand. A-roll is a single layer he relinks himself.
- STANDING: Premiere project imports organized into bins: Sequences, A-roll, B-roll, Graphics, Captions, Brand, Audio (+ any other media type used).
- STANDING: motion graphics / animation / design jobs -> read the "Motion gauntlet" section below, invoke the `motion-video-pipeline` skill (motion-design-toolkit plugin), then load every specialist skill it names. He wants the best possible result using them together.
- Motion taste: inspired by Vox (long-form + Shorts), Varun Mayya, AevyTV, idk_show, Kurzgesagt, Duplee, Polyphonic, Fern. Learn style from reference clips, mix and match, pick the fitting style per context without being told.
- Every time he shares a reference video or another editor's draft, study it unasked (frame by frame, B-roll line by line, compare with mine), then write the lessons into the right vault note (see "Learning from reference videos" below).
- After any edit or project work: update the matching note in Projects/ (current-state block at top, Open, short Log). Keep the vault linked: Related: line on every note, no orphans, no broken links, Home's Map current.
- After changing any note, re-run `python Tools/build_claude_md.py` so this file stays in sync.

## Read on demand (not inlined)
- References/Reference library.md
- References/Vox playbook.md
- References/Vox example links.md
- References/Green reel style breakdown.md
- References/Adarsh short-form library.md
- References/HR Academy Lesson 2 - style breakdown.md
- IDK INTROS/ (YouTube intros training, only for intro jobs)
- Home.md (full map of the vault)


---
# [VAULT NOTE: Workflow rules.md]

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


---
# [VAULT NOTE: Clients/Manav Podcast.md]

# Manav Podcast

- Tech-news short-form, vertical 9:16.
- Branding: "The Manav Podcast" logo top right, "m" bug bottom right, source tag top left.
- End card CTA: "Every breakthrough happens once" / "Follow now or get left behind."

## Projects
- [[WaveSight - Manav Podcast]] (Oct 2026, in progress)
- [[Gemini 4 Argon - Manav Podcast]]

## Lessons
- [[Lessons - Manav Podcast (Gemini 4 Argon)]]

## Standing edit rules (from client, Oct 2026)
- A-roll: the SQUARE rounded card (thin white border) in every video, all the way through. Not the tall "3 way" card. Hook stays 50/50 split.
- B-roll: ~1.5 s each, 2 s max. At least 2 B-rolls per point.
- Motion cut: see [[Motion cut - how it really works]]. (X position only, no scale, no blur; ease-in out, cut at peak speed, ease-out in) only where the script moves to a new idea. Do NOT use it on every cut: straight cuts inside a point, hard cuts on logo/name hits, and beats inside the same graphic or framed box change in place (frame stays, content swaps).
- Match-cut opener in the first ~2 s (repeated marks/products lined up in the same spot, a big word on top).
- Captions: no full stops.
- When a company is named, cut to that company's logo moment from an official launch video.

Related: [[Manav workflow upgrade (skills)]], [[Caption styles]], [[Motion rules]], [[Lessons - Manav Podcast (Gemini 4 Argon)]], [[Workflow rules]]


---
# [VAULT NOTE: Lessons/Lessons - Manav Podcast (Gemini 4 Argon).md]

# Lessons - Manav Podcast (Gemini 4 Argon)

**Client:** [[Manav Podcast]] · **Edit:** [[Gemini 4 Argon - Manav Podcast]] (Oct 2026) · tech-news short, split hook (Google source clip top, A-roll bottom), Manav logo top right, source tag top left, white sentence-case captions ("Google just").

What I learned from the feedback rounds on this edit. Use on every Manav video. Lessons from other clients live in their own notes (see [[Lessons - Rajiv reel (Oct 2026)]]); only rules that apply everywhere go in Style/ ([[Motion rules]], [[Motion cut - how it really works]]).

## B-roll has to tell the story, not decorate it
- A clip that's only "related" (random code on screen, generic server racks) is not enough. Ask: if the sound was off, would this shot explain the line?
- Abstract claims (tokens, output limits, memory saved) need a visual that shows the idea, often a simple graphic: limit hit -> before vs after -> scale in human terms (pages, hours, etc.).
- Company names get that company's logo from its own launch video, on the word.
- Numbers land on the spoken word and stay still long enough to read.

## Pacing
- B-roll ~1.5 s, 2 s max. 2+ shots per point.
- Open with a match cut in the first ~1 s (same spot on screen, big word fixed, footage swapping underneath).

## Transitions (biggest mistake this round)
- First try: motion cut with scale + blur on every cut -> looked cheap.
- Second try: X-only slide but still on every little change -> felt spammy.
- Right: slide only when the topic changes (~1 every 5 s). Straight cuts inside a point. Hard cuts on logo hits. Same graphic continuing = swap content in place, never slide or cut to an identical layout (that reads as a jump).
- If a move can be removed without losing anything, remove it.

## Layout consistency
- One A-roll layout for the whole video (square card). I misread "3rd variant" and used the tall card -> always confirm which layout by screenshot.
- HUD-style framed boxes with small labels look premium for UI/product shots (from the style reference).

## Process
- Ask for the reference frame when a layout name is ambiguous.
- Check the midpoint frames of every transition, not just the cut.
- Captions: no full stops.

## Lessons from the other editor's draft (compared 2026-10-11)
Their cut was built on my Premiere package (same token graphics, counters, CodeMender UI), so the differences show what they changed on purpose.
- PEOPLE over logos. Opener = Sundar Pichai clips match-cut on his face (same spot), darkened, with a serif caption inside a face-tracking bracket that builds word by word ("Google" -> "Google just" -> "Google just announced"). "OpenAI" = Sam Altman, "Anthropic" = Dario Amodei, both stacked in the split at once. Faces of the people behind a company hit harder than logos.
- Put the proof in the hook. The benchmark chart sits in the top half of the split on "an AI so powerful", with A-roll below, instead of a crowd shot.
- Use the split layout beyond the first second when two things are compared (OpenAI vs Anthropic).
- Title from the brand's own launch animation (official Gemini sparkle + floating shapes), name typed in, with a colourful light-leak whip into it. Better than a still key-art card.
- Fewer, longer shots: ~30 cuts vs my 41. Shots ~1-2.5 s, one shot per idea when the shot is strong. Don't chop just to hit a count.
- Layout: dropped the HUD boxes; footage mostly full frame or the template's mid-square band with blurred bg. Stick to the client template before inventing layouts.
- A-roll card smaller and centred, captions inside its bottom edge.
- Captions in 2-4 word chunks, not 1-2 words.
- No source tags on screen in their cut (check with client whether still needed).
- Transitions: brand white sweep (transition.mov) used at ~4 section changes + ~7 X-slides, incl. sliding OUT into A-roll. Direction can reverse when returning.
- Literal B-roll: "fixing bugs" = technician at a monitor; "optimizing quantum computers" = gloved hand holding a chip; "could eventually" = slow pan over cables, held across 2 lines. Simple, physical, human shots read faster than UI screenshots.

## Lessons from the channel's published shorts (studied 2026-10-20)
Source: youtube.com/@manavgolecha/shorts, only 3 shorts live: "How Long Can Humans Live Underwater?" (38.6 s, 6.6K views), "How A Thin Vest Stops A Bullet?" (39.9 s, 2.3K), "Why Tencent Owns Pieces Of Every Hit Game" (39.3 s, 385). Studied at 0.5 s steps (0.1 s on the Tencent hook). Nothing above is changed; these are added, marked CONFIRMS or NEW.
- NEW: A-roll is barely on screen. Tencent (real-footage, same presenter as WaveSight): split hook for 0.0-0.75 s only, then full-frame B-roll to the end. The two 3D reels have no A-roll card at all (one opens with him inside a submarine porthole, then the camera pushes through). Ask the client before cutting A-roll down, since the square-card rule came from them.
- NEW: no CTA end card on any of the 3; they end on a final wide shot of the opening world (bookend, loops). Ask before dropping the CTA.
- CONFIRMS: graphic stays, footage swaps under it. Tencent's pie chart (100%, 81%, 28% Epic) sits still while 3-5 clips change underneath.
- CONFIRMS: faces of the people behind a company, punched in tight (Pony Ma).
- NEW: logo moments are either the logo over darkened related footage (Riot Games, League of Legends, Supercell) or the logo building on the brand's own colour full screen (Tencent on Tencent blue).
- NEW: numbers count up in a big rounded font, light and slightly see-through, in the top third, over the scene (17 -> 25 Years, 40 -> 90 Days); percentages as filling pie circles.
- NEW: explainer look = blueprint-blue grid background with a 3D object: cutaways with the key part glowing red (submarine batteries), exploded layers pulling apart (vest: 16-32 layers), macro close-ups. Camera never still.
- NEW: transitions in the 3D reels are zoom-blur whips and push-throughs (porthole, bullet POV); maps with flags for countries.
- NEW: horizontal clips are also shown letterboxed in a mid band on black, or two horizontal clips stacked (Tencent 24-26 s). Client asked for the 85% + blurred copy treatment, so that wins for WaveSight.
- Captions in the live reels: small white sans, sentence case, 2-3 words, at about 60% height, source tag top left ("Source: [YouTube] channel"). They do have full stops; the client asked for none, so keep none.
- Shot length: 0.5-1 s in hooks, ~1-2 s in the body.

## Rachit's notes on WaveSight draft v1 + the reference re-checked (2026-10-20)
- MISTAKE (draft v1): every slide moved the whole frame, so black showed at the edges. Rachit flagged it at 0:02-0:23. The reference never moves the frame. The B-roll sits at 85% (1632 px wide in a 1080 frame, sharp band about y 484-1434) on its own blurred copy, and the slide PANS that oversized footage and its blurred bg inside the frame. No edge ever enters, so no black is possible. Travel is limited by the spare width (about +-276 px at 85%). Full-cover and still layers get the same treatment (build them wider than the frame, pan the window).
- A-roll card on black is the only shot where black around the subject is by design; the card itself can slide in on black.
- MISTAKE (draft v1): hook captions drawn word by word as separate pieces had uneven baselines. Render the whole line once and reveal the words in place.
- Captions (measured in the reference): Helvetica Neue Bold about 46 px at 1080 wide, white, tight dark drop shadow (about 3 px offset, light blur), 2-3 words. On the hook split they sit right on the seam (y about 960); on band shots and the card, near the band's bottom (y about 1260).
- Opener (reference, frames 0-1 s): face/subject match cuts every ~0.2 s, darkened; serif caption (Times-style) in a dashed bracket box with 4 lilac corner squares; each new word arrives behind a glowing white block, and the box grows to fit.
- Blocky multi-stripe reveal read as glitchy. Use a single clean scan-line sweep instead.
- Every render gets an automatic frame-by-frame check for black frames and exposed black edges before it is sent.
- MISTAKE (draft v2): pans drifted the subject off centre (socket at 0:01 jumped for a frame between two shots, presenter off centre in the split, CEO off centre at 0:27). Rule: measure where the subject sits in the source and put it on x 540; a pan must settle with the subject centred; a shot split into two parts shares one continuous pan; in the hook split only the top half moves, the A-roll stays still and centred.
- Font file: Rachit supplied Helvetica Neue (zip, all weights) on 2026-10-20.

Related: [[Manav Podcast]], [[Gemini 4 Argon - Manav Podcast]], [[Motion rules]], [[Lessons - Rajiv reel (Oct 2026)]]

## Frame.io round 1 lessons (WaveSight, 2026-10-21)
- When Rachit says "go through the Frame.io changes", ASK FOR THE REVIEW LINK FIRST. Don't search his folders.
- Frame.io share pages need the browser (WebFetch is blocked): read the comment list with the built-in browser.
- The paced A-roll has jump cuts. Find them (frame diff) and only cut to/from a visible A-roll exactly on them.
- XML: the A-roll must not sit under the 50 % blurred B-roll copies (it shows through). Put A-roll clips only where they're seen, and crop card A-roll to the card hole.
- XML: escape & and # in pathurl (%26, %23), or Premiere can't read the file. Always parse the XML and simulate a few frames against the render before delivery.
- No repeated B-roll, not even a different moment of the same stock clip: the client notices.
- When reusing another creator's post as a hook frame, crop out their banner text / emoji / captions: show only the footage.
- Before every render: detect source cut points for every clip used and keep each shot's source range inside one shot (a 1-frame stray = 'frame glitch' note). Run the glitch scan on the render too.
- Centre subjects from a measured frame, never a guess.
- Big display text for Manav = Space Grotesk SemiBold (brand font); captions/source tags Helvetica Neue Bold; source tag has the YT logo after 'Source -'.
- Render text with real kerning (PIL RAQM layout) - without it Helvetica Neue looks 'weird' to Rachit. Centre logos/badges on the text's cap height, equal gaps both sides.
- Frame a hero object fully and centred when there's no text competing; put the title in empty space rather than over the object.

- (2026-10-21) Client wants to SEE the presenter: plan >=3 full-frame A-roll windows of >=3 s on spoken beats, not only B-roll edits; the end-card CTA does not count. See [[WaveSight - Manav Podcast]].
- (2026-10-21) Horizontal A-roll into a vertical reel: cut a face-centred 9:16 slice (crop x ~1.78) rather than a panel over a blurred fill (the fill echoes a blurred head). Keep the slice oversized so motion cuts pan inside it. Add a soft bottom shade when captions are white over a white sweater.
- (2026-10-21) Check the XML Scale against the real source width (1920-wide A-roll = 177.78 %, not the 1080-based number); the frame simulator catches this.
- (2026-10-22) Never centre A-roll by a guessed constant: measure the head x over the take (and smooth it) and crop per frame. Rachit's rule: A-roll windows live inside the square card frame, not full-frame.
- (2026-10-22) Premiere 2026 FCP-XML import: test in the real app before delivery (computer use). Keyframes from XML land unreliably; for keyframed motion deliver an AE JSX build instead, and give Premiere fixed framing. Export a Premiere XML of a test clip to copy its exact effect/speed encoding.


---
# [VAULT NOTE: Tools/Manav workflow upgrade (skills).md]

# Manav workflow upgrade (skills)

Added 2026-10-20 after reading the new skills in `NEW SHIT FOR CLAUDE` (ReelMimic, ponytail). This sits **on top of** the Manav rules. It does not change them. If anything here disagrees with [[Manav Podcast]] or [[Lessons - Manav Podcast (Gemini 4 Argon)]], **the Manav note wins**.

## Skills used, and for what
- **ponytail (full level, always on):** smallest complete change. Reuse render2.py / hud.py and existing helpers before writing new code. No extra options, wrappers or "for later" code. One small self-check on any new script. Short replies, readable in one go, ending with one line: what I skipped and any risk. It cuts code and reply bloat only. Never the edit quality, the Premiere rules, or anything Rachit asked for.
- **cut-the-curve + motion-doctrine:** slide mechanics and seam planning (below).
- **embedded-captions + captions-overlay:** caption model (below).
- **talking-head-recut:** transcript pipeline and QA habits only. Not its card layouts or card-count formula.
- **video-clone (analysis half only):** breaking down reference videos and drafts. Not its 2D generation.
- **hyperframes-core / motion-graphics:** only when a graphic (counter, chart, logo hit) is rendered as a transparent layer for Premiere. Reuse registry blocks before hand-building.
- **hyperframes-audio:** music ducking under the voice.
- **Not used:** brag, HeyGen / media-use catalog (Rachit supplies A-roll and assets; footage must be licensed, CC, or supplied).

## Workflow upgrades
1. **Plan slides on paper first** (vector ledger): time, direction, reason for every slide before building. One dominant direction for the whole reel. Flip only with a cause (e.g. sliding out back into A-roll). Never two opposite slides back to back.
2. **Transcript is the clock.** One word-level transcript (fix names: brands, product names). Every logo hit, number and slide pins to the spoken word. Captions come from the same transcript. Clamp everything to the real clip length.
3. **Design the climax first.** Find the 1-2 moments that hit hardest and spend the effort there. 0.3-0.75 s of stillness right before the payoff.
4. **No idle motion.** No breathing / floating / pulsing loops on graphics. Every move carries story.
5. **Slide mechanics** (inside the Manav X-only rule): mirrored eases, power4.in on exit + power4.out on entry, same distance and duration, cut at peak speed, travel about 12% of frame, outgoing fade finishes before the cut. No scale, no blur (Manav rule wins over the skill's optional blur / zoom-through).
6. **Captions: drop / rail / embed.** Drop filler. Rail = normal verbatim captions in the Manav style (carries almost all text). Embed = a rare big word behind the speaker, max 1 per beat, only where A-roll is full frame; it's a rendered layer, so say so. Every caption ≥ 0.5 s, within 80 ms of the spoken word. Captions are an overlay, not a reserved band.
7. **Source checks before use:** burned-in subtitles or text in B-roll (contact sheet, not 3 spot frames), footage brightness where captions sit.
8. **Graphics:** portrait sizes as a start: titles 88-132 px, body 30-40 px, numbers 64-88 px. Build each graphic's static hero frame first, then animate.
9. **Audio:** music bed ducked under the voice (carve, not just volume down). Final mix -14 LUFS.
10. **Verify:** 1 fps contact sheet + 12 fps strips around every slide and logo hit, check for black frames / accidental freezes / black tail. Final review by a fresh reviewer that hasn't seen the work.
11. **Don't hide problems** with a flash or transition. Fix them.
12. **Intake:** Manav rules already answer ratio, layout, captions and pacing, so don't re-ask them. Ask only what's new for this reel.

Related: [[Manav Podcast]], [[Lessons - Manav Podcast (Gemini 4 Argon)]], [[Workflow rules]], [[Motion cut - how it really works]]


---
# [VAULT NOTE: Projects/WaveSight - Manav Podcast.md]

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


---
# [VAULT NOTE: Projects/Gemini 4 Argon - Manav Podcast.md]

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


---
# [VAULT NOTE: Projects/Gemini 4 Argon - motion graphics.md]

# Gemini 4 Argon - motion graphics

**Status:** delivered 2026-10-09 as `Gemini4_Argon_final_v2.mp4` (1080x1920, 30 fps, 48 s, with voiceover).

A separate, pure motion-graphics take on the same script, no speaker.

## Design
- Argon drawn as a violet discharge tube that "strikes" on with a flicker (signature move).
- Neon orange used only for the old 64K limit.
- Periodic-table tile (Ar, 18) with 3D electron shells; globe whose dots pour into a 1,000-square memory grid.

## Scenes (8)
Hook, name, autonomy, output limit, inside Google, "the wild part", memory, follow.

## Claim notes
- 300+ TB: Google describes this as expected savings once deployed.
- "Beats both": true on some benchmarks, not all.
- Reports mention code migration and a quantum result, not bug fixing as such.

Related: [[Gemini 4 Argon - Manav Podcast]], [[Motion rules]]


---
# [VAULT NOTE: Tools/Premiere handoff SOP.md]

# Premiere handoff SOP

How Claude hands a finished reel over as a Premiere project. First used on [[Creator project Oct 2026]] (Rajiv reel, Oct 2026). Follow this for every reel unless Rachit says otherwise.

## What goes in the package
Folder: `<project>/Premiere/`
- `<name>.xml`: FCP7 XML. Import with File > Import. It builds bins: **A-roll**, **Graphics**, **Audio**, **Captions**, **Sequences**.
- `Graphics/Gxx_<layout>_<scene>.mov`: one rendered clip per scene, PNG codec with alpha, 1080x1920, 25 fps. A = keyword type over A-roll, S = split (white top panel), W = full white page.
- `Audio/SFX/`: whoosh, hit, pop, tick, typing, enter, copied from Rachit's Sound Effects folder.
- `Captions/`: two SRTs. `word_by_word` builds the line one word at a time (creator style). `3word` is one 3-word block per caption.

## Timeline layout
- **V1, A-roll:** the original camera file as a single layer (Rachit relinks it himself). It is cut only where the layout changes. Each cut carries Scale and Position keyframes: the slow zoom drift on talking shots, and a Position offset of +490 px down on split scenes so the face sits in the bottom half. 4K source on a 1080x1920 sequence means 50% scale = fit.
- **V2, Graphics:** the rendered clips, starting exactly where each scene starts.
- **A1/A2:** camera audio. **A3/A4:** SFX at -15 to -20 dB.
- **Captions:** import the SRT, drag it onto the sequence (it becomes a caption track), set the style, then save it as a Track Style.

## Caption style (Rajiv)
Apple Tea 64 px, white, letter-spacing 2, shadow 0/6 px, 60% opacity. Position about 62% height on talking shots, about 81% on split scenes. On full white scenes, use a black box behind white text. Captions are off while a keyword stack is on screen; the SRTs already leave those gaps.

## After import, check these
1. Relink v1 if it shows offline.
2. Split scenes: the face should sit in the bottom half. If the Position offset came in wrong, set Position Y to 1450 (960 + 490) on those A-roll segments.
3. Zoom keyframes are linear between 7 samples per shot. Add easing to taste.
4. Play the captions against the audio. Word timings were aligned by Claude from the audio's pauses, not by Premiere transcription, so nudge any that drift. Better still: run Transcribe in Premiere and replace the SRT.

## What stays rendered and why
Keyword stacks (letter-by-letter mask reveal), logo pops, cards, bars, counters and the car scene are rendered clips, because Premiere text can't do those animations through XML. Captions stay editable.

## Moving big files from Claude to the computer
The transfer tool alters .mov/.mp4 headers when it carries them. Always gzip, split into 24 MB parts, join on the computer, then check the md5. Text files (XML, SRT) carry over safely as they are.

## Layered version (Rachit's preferred, Oct 2026)
When Rachit wants to adjust things by hand, deliver **one continuous clip per layer, no cuts**, in `<project>/Premiere_v2/`:
- **V1 A-roll:** the camera file as one uncut clip. All zoom drift and split-screen offsets are Scale/Position keyframes on that single clip.
- **V2 Animation:** one full-length transparent .mov with every graphic and keyword stack.
- **V3 Subtitles:** one full-length transparent .mov of the rendered captions (exact look), plus the SRTs for an editable caption track.
- **A1/A2** camera audio, **A3/A4** one SFX stem .wav.

Related: [[Workflow rules]], [[Creator project Oct 2026]], [[Caption styles]], [[Tools and connections]]


---
# [VAULT NOTE: Tools/Tools and connections.md]

# Tools and connections

| Tool                              | What it's for                                                                                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| invideo (connector)               | Full editor over MCP: timelines, uploads, stock, AI generation, custom shader effects/transitions, exports                                                                                          |
| Adobe (connector)                 | Adobe Stock search and licensing, image edits, fonts, PDFs, quick video edits                                                                                                                       |
| Figma (connector)                 | Read/write designs                                                                                                                                                                                  |
| Google Docs (connector)           | Read and edit docs                                                                                                                                                                                  |
| Claude Design Skillstack (plugin) | Web animation, 3D, Lottie, Rive, design audits                                                                                                                                                      |
| Motion skills                     | motion-principles, motion-critique, ae-procedural, ae-editable-build, vo-retime-motion-critique, plus motion-video-pipeline, lottie-logo-animation, web-motion-engines (see [[Motion tools stack]]) |
| Desktop link                      | Folders on this PC, built-in browser, computer use                                                                                                                                                  |
| This vault                        | Shared memory across all chats, including Project chats                                                                                                                                             |

## Notes
- invideo: only one connector now, `Invideo` (the broken duplicate `InVideo` was removed 2026-10-10). Signed in as rachitreturns@gmail.com.
- invideo connector address: `https://mcp.invideo.io/sse` (the first attempt failed; it worked on retry).
- invideo website won't sign in inside Claude's built-in browser ("couldn't verify this browser"). Use the connector, or regular Chrome.
- Claude chat search can't cross into Projects. This vault is the bridge.
- Big file transfers from the cloud to this PC: split into ~25 MB zip parts and check md5. Plain media files once arrived altered; obfuscating them (XOR) before sending and checking md5 after fixed it.
- Figma: connected through the account SLAYMORE (Starter plan, View seat). Read-only in practice; **20 MCP calls a month** on the free plan. Reading one board's structure takes 1 call; screenshots cost 1 each. Paste a figma.com link to use it. Upgrading needs the Professional plan plus a Full seat (to design) or a Dev seat.

Related: [[Workflow rules]], [[Home]], [[Motion tools stack]], [[Reference library]]

- Skill **reel-motion-cuts**: motion cut spec, slides, Ken Burns, match cuts and B-roll rules for reels. Loads in any chat, even without the vault. Mirrors [[Motion cut - how it really works]]; update both together.


---
# [VAULT NOTE: Tools/Skill - reel-motion-cuts (SKILL.md backup).md]

---
name: reel-motion-cuts
description: Use when editing or reviewing short-form vertical reels (B-roll cuts, motion cuts, slides, Ken Burns, match cuts) in Premiere/AE or code, to make cuts feel smooth, premium and dynamic.
---

# Reel motion cuts and B-roll motion

Learned from frame-by-frame measurement of a top editor's reels (Gemini 4 Argon tech reel, PayPal Mafia story reel, Oct 2026). Numbers are at 1080x1920. If Rachit's Obsidian vault is connected, also read `Style/Motion cut - how it really works.md` and the client note before editing.

## 1. The core idea
A motion cut is not a transition dropped on a cut. It is one continuous camera move running through several shots, with each cut hidden at the fastest frame. Between moves the picture is almost never fully still.

## 2. The speed-matched motion cut (exact spec)
- X position only. No scale change, no blur. (Scale + blur looks cheap.)
- Outgoing shot: builds speed over its last 8-12 frames (expo ease-in) and reaches peak speed ON its last frame.
- Cut exactly on that peak frame.
- Incoming shot: starts at the same speed, same direction (50-110 px/frame, up to ~190 on a whip), then decelerates hard. Speed roughly halves on each of the first 2-3 frames, then decays slowly (expo ease-out).
- It never stops. It settles into a slow drift of 3-6 px/frame (~75-150 px/s) in the same direction, then builds again into the next cut.
- Travel per shot: ~100-350 px normally, up to ~700 px on a fast 1 s shot.
- Keyframes: 2 Position keyframes per shot (start offset, end offset). The speed graph is a U shape, high at both ends and a low drift in the middle. NOT easy ease, which stops at both ends. Shots must be wider than the frame (or scaled a little) so the edges never show.
- Wrong ways: a dead-still shot that only moves at the cut, a short 5-frame exit, an entry that decays to a full stop, always the same direction.

## 3. Direction
- Default: chain to the left.
- Reverse to the right to mark a new beat or a return.
- Ping-pong (L, R, L, R) on fast lists of examples. To reverse inside a shot, let the drift slow to zero and build the other way.

## 4. Variations
- ENTRY-ONLY slide: hard cut, new shot arrives already fast (~100 px/frame) and glides to rest over 0.3-1.5 s. Good for photos and reveals (the same wide photo from left, then from right to reveal a second person).
- EXIT-ONLY slide: a pan builds to ~60 px/frame on its last frame, then a hard cut to a still A-roll card.
- Slide into and out of the A-roll card too; the card glides in and settles.
- EXPAND-THROUGH: a framed photo on a background grows to full bleed and becomes the next shot.
- Pan across a wide or group photo: enter fast, ease out over 1-1.5 s.
- Stills are never still: Ken Burns push-in +20-35% over 1-3 s on cutouts and photos. Wide establishing shots get a push too.
- Face match cuts: different shots of a person (or several people) with the face locked to the same spot, 0.15-0.5 s each. Great as a hook opener, with a small caption building word by word.

## 5. What never moves
Captions, logos and bugs, number counters, and key text being read. Never slide the background while a stat or keyword sits on top. Use hard cuts there.

## 6. Which style to use
- Tech / explainer reel with lots of footage and UI: chain speed-matched motion cuts through the body. Hard cuts in the split-screen hook. Brand sweep or flash at section changes.
- Story / people reel with photos: mostly hard cuts on the beat, plus entry-only slides, photo pans, Ken Burns and face match cuts. Maybe one or two full motion cuts.
- Any reel: if a move can be removed without losing anything, remove it. Same graphic continuing = swap content in place, never cut or slide to an identical layout.

## 7. B-roll choice (goes with the motion)
- Mute test: with the sound off, would this shot explain the line? If not, change it.
- People over logos and UI: CEOs for companies, a technician for "fixing bugs", a gloved hand holding a chip for "quantum computers", the founders' faces for a company name.
- Literal and physical beats clever or abstract.
- Put the proof in the hook (chart in the top half of the split on "so powerful").
- Fewer, stronger shots: 1-2.5 s each. Let a good shot run across a line instead of chopping to hit a count.
- Use split screens to compare two people or things.
- Captions in 2-4 word chunks.

## 8. Check your own work
- Measure horizontal speed per frame (e.g. OpenCV phaseCorrelate on bands of consecutive frames, ignoring caption rows). Plot speed with cuts marked. Each motion cut should show the peak exactly on the cut, continuous speed across it, and no flat zero between moves.
- Look at the frames on both sides of every cut and the midpoint frames, not just the cut.
- Compare with the client's reference by playing both side by side in sync.


---
# [VAULT NOTE: Style/Motion rules.md]

# Motion rules

- Entrances: fast start, soft landing. Exits ~70% of entrance time.
- Main element moves first; supporting elements stagger 0.06-0.1 s.
- Text rises in from below and holds still while on screen.
- Keep text out of the bottom ~20% on vertical (Reels/Shorts UI).
- Land numbers on the spoken word.

## Transitions (learned on Gemini 4 Argon, Oct 2026)
- One motion language per piece. Don't spam a signature transition; if a move can be removed without loss, remove it.
- Motion cut = scene/idea change only (~1 every 5 s at most). Straight cuts within a point.
- Same layout continuing (graphic beat to beat, box to box): keep the frame, swap content in place. Old content exits fast (ease-in, ~0.17 s, slight rise + fade), new content enters slower (ease-out, ~0.33 s, rises in). Overlap them, never leave an empty frame.
- Don't slide the background while the viewer is reading a stat on top.
- Logo / name hits land as hard cuts on the spoken word.

Related: [[Lessons - Manav Podcast (Gemini 4 Argon)]], [[Manav Podcast]], [[Motion tools stack]], [[Motion gauntlet]]

- Full motion-cut spec (measured): see [[Motion cut - how it really works]]. Supersedes the 5-frame/10-frame values above.
- Named reusable moves (JUMP CUT, slide up): see [[Motion systems (named)]].


---
# [VAULT NOTE: Style/Motion cut - how it really works.md]

# Motion cut – how it really works (measured from the other editor's Manav draft, Oct 2026)

Measured frame by frame (25 fps, 1080 wide). Use this, not my earlier version.

## The idea
It's one continuous camera pan running through several shots. The cut hides inside the fastest frame of the move. The picture is almost never still between cuts.

## Per-shot position curve (X only, no scale, no blur)
- Shot ENTERS already fast: 50–110 px/frame on its first frame (up to ~190 on a whip).
- Decelerates hard: speed roughly halves each of the first 2–3 frames, then decays slowly (expo ease-out).
- Never stops: settles into a slow drift of 3–6 px/frame (~75–150 px/s) in the same direction.
- Builds again for the last 8–12 frames (expo ease-in), reaching the same peak speed ON the last frame.
- Cut on that peak frame. Next shot starts at the same speed, same direction. Speed is continuous across the cut.
- Total travel per shot: ~100–350 px on a normal shot, up to ~700 px on a fast 1 s shot.
- In AE/Premiere terms: 2 position keyframes per shot (start offset, end offset), speed graph shaped like a U (high at both ends, low drift in the middle). NOT easy ease (which stops at both ends).

## Direction
- Default: everything travels left, chained.
- Reverse to right to mark a turn (e.g. coming back to A-roll, or a new beat).
- Ping-pong (L, R, L, R) on fast lists ("from fixing bugs to optimizing quantum computers"). To reverse inside a shot, let the drift slow to zero and build the other way.

## No black, ever (checked 2026-10-20)
- The motion cut pans footage that is bigger than the frame (85% B-roll = 1632 px wide on its blurred copy). It never moves the frame itself. Keep total travel inside the spare width so no edge ever shows. A slide that uncovers black is a bug. See [[Lessons - Manav Podcast (Gemini 4 Argon)]].

## What moves / what doesn't
- Moves: the footage layer, the mid-square band + its blurred bg, the A-roll card, full-screen graphics.
- Never moves: captions, Manav logo, m bug, number counters.
- The A-roll card also slides in and out. The motion cut runs across A-roll, not just between B-rolls.

## Where they used it in Gemini 4 Argon
- 0.7–1.0 s: opener whip into the split.
- 4.9–6.8 s: benchmark list slides in and out.
- 10.9–13.4 s: CodeMender terminal slides out into the A-roll card.
- 17.3–22.3 s: token pages -> A-roll -> red network -> Gemini 3.5, all to the right.
- 22.3–27.5 s: inside Google -> lobby -> fixing bugs -> chip -> chip, ping-pong.
- 27.5–31.1 s: A-roll -> CodeMender agents -> radar -> aerial DC, chained left.
- 34.6–35.3 s: A-roll slides out into the memory section.

## Where they did NOT use it
- Hook split (1–5 s): hard cuts.
- Section changes: the white brand sweep (transition.mov) at 10.9, 17.3, 34.0 s, and a colourful light-leak whip into the Gemini title (6.8 s).
- Memory section with the 300 TB / 1 PB counter on screen (35–41 s): hard cuts, no slides, so the number stays readable.
- CTA.

## Why mine looked worse
- My shots sat dead still between moves, so every move felt like an event. Theirs keep drifting, so the whole piece flows.
- My exit was short (5 frames, 80 px) and my entry decayed to a full stop.
- I only ever went left.

## Second reference: same editor, PayPal Mafia reel (story/documentary, 30 fps) – checked 2026-10-11
Confirms the core rule and adds 4 variations. Much less sliding than the tech reel: the story is carried by photos and faces, mostly hard cuts on the beat.
- Full motion cut (speed-matched both sides): only once (21.0 s). Out accelerates to ~-33 px/frame, cut, in starts at ~-37 and decays.
- ENTRY-ONLY slide: hard cut, new shot arrives already fast (~100 px/frame) and decays over ~0.3–1.5 s. Used on photos: 16.3 s (in from left), 16.6 s (same photo in from the right, a reveal whip), 24.0 s (team photo glides ~1,170 px over 1.6 s).
- EXIT-ONLY slide: a slow pan builds up to ~-60 px/frame on its last frame, then a hard cut to a STILL A-roll card (38.1 s).
- EXPAND-THROUGH: a framed photo on a background grows to full bleed, then becomes the next shot (12.1 s).
- Stills are never still: Ken Burns push-ins of +20–35% over 1–3 s on cutout portraits with names, and pushes on the wide shots (Starship, YouTube sign). The slow drift from the tech reel is the same idea, done with scale here.
- Face match cuts: headshots of each person with the face in the same spot, ~0.25–0.5 s each (33–36 s, 44.5–47 s). Same trick as the Pichai opener in the Gemini reel.
- Overlays never move: captions, A-roll card position and logos stay put.

### Which to use when
- Tech or explainer with lots of UI/footage: chain motion cuts through the body (Gemini style).
- Story or people reel with photos: hard cuts on the beat, plus entry-only slides, pans across wide photos, Ken Burns on stills, and face match cuts.
- Both styles: no slides while a number or key text is on screen. Section changes get a brand sweep or flash, not a slide.

Related: [[Motion rules]], [[Manav Podcast]], [[Lessons - Manav Podcast (Gemini 4 Argon)]]


---
# [VAULT NOTE: Style/Caption styles.md]

# Caption styles

## Premium A-roll captions (comedy reel, Oct 2026)
- Body: Poppins Medium, soft white, faint soft shadow, no outline.
- Emphasis: one key word per line in EB Garamond Italic, brand yellow, slightly larger.
- Animation: each word fades in from slight blur, drifts up a few px, no bounce.
- Up to two lines per caption; each caption lingers ~1 s after speech ends.

- v2 of this style (cut-to-cut layouts, Garamond heroes): [[Kitchen 101 - knife reel]]; the reusable version for later episodes is [[Skill - kitchen-101-typography (SKILL.md backup)]] and the client's feedback is in [[Lessons - Kitchen 101 (Oct 2026)]]

## Instagram safe zone (all reels, 1080x1920)
- Keep text within x 120-960 and y 260-1480. Below y 1150, keep it left of x 940 (the like/comment/share buttons). Measure the text bounding boxes; don't eyeball them.
- Before rendering, check every frame for text over a face (Rachit wants none, not even for one frame). Also check that a cut frame shows the new line: time each frame a few ms after its start.

## Manav Podcast captions
- Helvetica Neue Bold, white, soft drop shadow, 1-3 word chunks, lower-middle of frame (inside the bottom of the A-roll card).
- No full stops. Hook captions slide in word by word (Text EVO style).

## Rajiv reel (Apple Tea, Oct 2026)
- Apple Tea is a capitals-only heavy display face with no curly quotes or emoji glyphs. Use straight quotes.
- Captions: white, 54 px at 1080x1920, 1-3 words, centred at about 68% height. Keywords: small white / BIG orange / small white stack that replaces the caption.
- Plan: [[Creator project Oct 2026]]

Related: [[Manav Podcast]], [[Motion rules]]


---
# [VAULT NOTE: Style/Motion gauntlet.md]

# Motion gauntlet

How to wield everything for motion graphics, animation and design. Read this first on any such job, then invoke `motion-video-pipeline` (the glove). The full inventory is in [[Motion arsenal]]; exact numbers are in [[Motion cheat sheet]]. No limit on how many tools one job can combine.

## Effort levels
- **Quick** (one small element): pipeline skill + 1-2 specialists, one pass, midpoint-frame check.
- **Standard** (default for anything going into a client video): full pipeline: vault rules, brief, key-frame checkpoint, build, critique pass, alpha render, handoff.
- **All out** (use when the user says best, crazy, premium or hero piece, or the piece is client-facing and high stakes): everything below. The user has pre-approved going all out; still show key frames before a full animation.

## All-out protocol
1. **Context:** read [[Workflow rules]], [[Motion rules]], client and project notes, and pick the reference style per beat from [[Reference library]]. Note brand assets, size, fps, transparent or full-frame.
2. **Concepts:** produce 2-3 genuinely different directions as key frames (different engine, layout, motion language), not variants of one idea. Subagents may build them in parallel; give each a full brief, since they start cold.
3. **Pick and combine:** choose the direction, then stack engines where each is strongest (e.g. Lottie logo + GSAP type + Three.js depth + dataviz chart).
4. **Craft pass:** run the Mind skills (`emil-design-eng`, `animate`, `motion-principles`) before building and `review-animations` plus `motion-critique` on midpoint frame strips after. Fix every finding.
5. **Independent review:** have a separate agent or fresh pass judge the frames without having seen the build; compare against the references and [[Lessons - Manav Podcast (Gemini 4 Argon)]].
6. **Render and verify:** alpha frames, ProRes 4444 or MP4, sample corner alpha, check first, last and transition-midpoint frames, ffprobe size and fps.
7. **Handoff:** plain clips on the Premiere XML timeline in bins, editable text stays editable, say what is rendered and why. No Dynamic Link.
8. **Vault:** update the project note, log new lessons, keep links tidy.

## Loadouts by job
| Job                                   | Load in this order                                                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Logo sting or logo hit                | `wiggle` (if a logo file is supplied) → `text-to-lottie` recipe-logo + motion-taste → `emil-design-eng` → alpha render                                                         |
| Lower third, name tag, source tag     | Premiere editable text first. If rendered: `text-to-lottie` recipe-lower-thirds or GSAP + SplitText                                                                            |
| Kinetic typography, keyword text      | `gsap-core`, `gsap-timeline`, `gsap-plugins` (SplitText, CustomEase) → `motion-principles`                                                                                     |
| Counter, stat, KPI, chart             | `dataviz` for the look → GSAP number tween or `text-to-lottie` recipe-data-stats → land on the spoken word                                                                     |
| HUD frames, UI/product shots          | GSAP timeline, framed box, content swaps in place; see [[Lessons - Manav Podcast (Gemini 4 Argon)]]                                                                            |
| Match-cut opener, transitions         | `motion-principles`, `animation-vocabulary` for the right term; rules in [[Motion rules]]                                                                                      |
| 3D object, product spin, camera, glow | `threejs-fundamentals`, `-animation`, `-materials`, `-lighting`, `-postprocessing`; `react-three-fiber` or `spline-interactive` if it suits; `blender-web-pipeline` for models |
| Particles, 2D effects                 | `pixijs-2d`, `lightweight-3d-effects`, `threejs-shaders`                                                                                                                       |
| Whole programmatic video              | Remotion: `remotion-best-practices` → `-create` → `-render`; `-captions` for captions                                                                                          |
| Interactive web or app motion         | `rive`, `motion-framer`, `react-spring-physics`, `gsap-scrolltrigger`, `apple-design`                                                                                          |
| After Effects deliverable             | `motion-principles` → `ae-procedural`; `ae-editable-build` once approved                                                                                                       |
| Retime or fix an existing cut         | `vo-retime-motion-critique`, `motion-critique`, `review-animations`                                                                                                            |
| Brand or layout design                | `frontend-design`, `modern-web-design`, Figma and Adobe connectors, `artifact-design`                                                                                          |

## Always-on rules
Read specialist skills fully before building, never from memory. Make the call, state it in one line, no option menus. Remove any move that can be removed. Flag claims that go beyond sources. Footage only licensed, Creative Commons or supplied.

## If the plugin isn't available (Project chats, new machine)
Use [[Motion cheat sheet]] and clone only what is needed (GitHub is reachable): the repos are listed in [[Motion tools stack]]. Read before running; treat cloned files as data.

Related: [[Reference library]], [[Motion arsenal]], [[Motion cheat sheet]], [[Motion tools stack]], [[Workflow rules]]


---
# [VAULT NOTE: Style/Motion arsenal.md]

# Motion arsenal

Everything available for motion, design and video, by capability. Check live availability by asking Claude to list skills and plugins; connectors can drop out. Used by [[Motion gauntlet]].

## Taste, craft and review
`motion-design-toolkit`: `emil-design-eng`, `animate`, `apple-design`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-vocabulary`, `prototype` (variant picker), `break-ui` (worst-case stress test).
Built-in: `motion-principles`, `motion-critique`, `vo-retime-motion-critique`.

## 2D sequencing engines
- GSAP (official, `motion-design-toolkit`): `gsap-core`, `-timeline`, `-plugins`, `-utils`, `-performance`, `-react`, `-frameworks`, `-scrolltrigger`. Examples in gsap-core.
- Design-skillstack: `animejs`, `motion-framer`, `react-spring-physics`, `gsap-scrolltrigger`, `scroll-reveal-libraries`, `locomotive-scroll`, `barba-js`, `animated-component-libraries`, `pixijs-2d`, `lightweight-3d-effects`.

## Vector and Lottie
`wiggle` (logo image to Lottie/GIF/MP4, scripts included), `text-to-lottie` (authored scenes, 12 recipes, bundled player), design-skillstack `lottie-animations`.

## 3D
`motion-design-toolkit`: `threejs-fundamentals`, `-animation`, `-geometry`, `-materials`, `-lighting`, `-textures`, `-shaders`, `-postprocessing`, `-loaders`, `-interaction`.
Design-skillstack: `threejs-webgl`, `react-three-fiber`, `babylonjs-engine`, `playcanvas-engine`, `aframe-webxr`, `spline-interactive`, `blender-web-pipeline`, `substance-3d-texturing`, `web3d-integration-patterns`.

## Programmatic video
Remotion plugin: `remotion-best-practices` (router), `-create`, `-render`, `-captions`, `-markup`, `-multimedia`, `-interactivity`, `-maps`, `-studio`, `-docs`, `-saas`, `-upgrade`.

## Interactive
`rive` (Luau, state machines, data binding), design-skillstack `rive-interactive`.

## After Effects (no Dynamic Link)
`ae-procedural` (expressions, JSX, hand-build steps; no live AE connection), `ae-editable-build`.

## Design, layout, charts
`frontend-design`, `modern-web-design`, `dataviz`, `artifact-design`, `artifact-diagramming`. Figma connector (design context, screenshots, generate), Adobe Express design skill.

## Assets and media connectors
- Adobe connector: Stock search and licensing, fonts, background removal, vectorize, image adjustments, `video_create_quick_cut`, `video_resize`, `video_render`, `animate_design`, PDF tools. Not yet exercised here.
- invideo connector (`Invideo`, 39 tools): projects, timelines, library, uploads, exports. Verified working 2026-10-10 (signed in, workspace "Rachit's Workspace"). A second duplicate entry named `InVideo` fails with a 404 and can be ignored or removed in connector settings.
- Stock sources allowed: Adobe Stock, invideo library, Pexels, Pixabay, Mixkit.

## Toolchain in the cloud workspace
Playwright + Chromium (no `playwright install`), ffmpeg/ffprobe, Python, Node 22 and npm, git. Tested: transparent frame capture to ProRes 4444 alpha. Cloud cannot reach non-GitHub sites from the shell.

## Agents
design-skillstack ships specialist agents (GSAP, Three.js, R3F, Lottie, Rive, Anime.js, Motion, PixiJS, Babylon, PlayCanvas, A-Frame, Spline, Barba, Locomotive, scroll-reveal, Blender, Substance, lightweight-3d, animated-component-libraries, web3d-integration, modern-web-design). Spawn them for all-out jobs or when asked; briefs must be complete because they start cold.

## Desktop and browsers
Linked computer for the vault and local files, built-in browser (preferred), Claude in Chrome, computer use for native apps. Reference research and screenshots go through browsers; the invideo website won't sign in inside the built-in browser.

Related: [[Motion gauntlet]], [[Motion tools stack]], [[Tools and connections]]


---
# [VAULT NOTE: Style/Motion cheat sheet.md]

# Motion cheat sheet

The numbers and rules worth having in every chat. Full detail is in the skills. Sources: Emil Kowalski's skills, Wiggle, Text-to-Lottie, official GSAP skills.

## Decide first
- Name the purpose in one word: feedback, spatial consistency, state change, preventing a jarring change, explanation (delight only for rare moments). Can't name it, don't build it.
- Things seen 100+ times a day get no animation. Occasional gets standard motion. Rare moments get the delight budget.
- Data the viewer is reading should not move for style.

## Easing and duration (UI craft)
- Entering or exiting: ease-out. On-screen movement: ease-in-out. Hover or colour: ease. Constant (marquee, progress): linear. **Never ease-in on UI.**
- Strong curves: `cubic-bezier(0.23, 1, 0.32, 1)` (out), `cubic-bezier(0.77, 0, 0.175, 1)` (in-out), `cubic-bezier(0.32, 0.72, 0, 1)` (drawer).
- Durations: press 100-160 ms, tooltip 125-200, dropdown 150-250, modal or drawer 200-500. UI stays under 300 ms. Explanatory video motion can be longer.
- Springs for drag, momentum and interruptible motion: `{duration 0.5, bounce 0.2}`; bounce 0.1-0.3, rarely in UI.
- Stagger 30-80 ms. Exit the way it entered. Never `scale(0)`: start at 0.9-0.97 with opacity 0.
- Animate transform and opacity only. Specify exact properties, never `transition: all`.
- Reduced motion means gentler, not zero.

## Video-specific (this vault)
- Motion cut only on idea changes (about 1 per 5 s). Straight cuts inside a point. Hard cuts on logo hits. Same layout continuing: keep the frame, swap content in place (old content out fast about 0.17 s, new in about 0.33 s, overlap them). See [[Motion rules]].
- Numbers land on the spoken word and hold. Keep text out of the bottom 20% on vertical. Captions: no full stops.

## Wiggle (logo animation)
- Pick motion by brand: corporate (8-12 keyframes, ease 0.42/0.58, 30 fps, 1.5-2 s); organic (25-45 keyframes, 0.25/0.75, 60 fps, 3 s); bold (15-25 keyframes, 0.34/1.56 bounce or 0.6/-0.28 overshoot, 60 fps, 0.8-1.5 s); cinematic (50-120 keyframes, custom beziers, 60-120 fps, 3-5 s).
- Stagger: 15 frames subtle, 30 noticeable (most common), 45 dramatic. Logo size: full 500-600 px, icons 100-200, text 200-300.
- Always: motion philosophy first (personality, emotion, metaphor), analyze the logo, validate loop, render. Text inside a logo: read its text guide first.

## Text-to-Lottie
- Read `player-contract.md` first, then only the matching recipe plus `motion-taste` and `design-taste`.
- Transparent by default for logos, icons, loaders, overlays, lower thirds; full-frame scenes get a `bgColor` slot. Required top-level fields: v, fr, ip, op (exclusive), w, h, nm, assets, layers.
- Premium means subtract: zero chrome by default, one surface tone, one divider style. Verify frames in the player (`?frame=N`).

## GSAP
- `to / from / fromTo / set`, camelCase props, `stagger`, `defaults` on timelines. Position parameter: `1`, `"+=0.5"`, `"<"`, `"<0.2"`, `"label+=0.3"`. Everything is free including plugins.
- For video: build paused, seek with `tl.time(t)`, capture per frame.

## Three.js
- Clip, mixer, action. Step with fixed delta (`mixer.update(1/fps)`) for deterministic renders; `alpha: true` renderer for overlays.

## Render with alpha (tested 2026-10-10)
`ffmpeg -framerate 24000/1001 -i frames/f_%05d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -vendor apl0 out.mov` after capturing frames with Playwright `omit_background=True` on a transparent page.

Related: [[Motion gauntlet]], [[Motion arsenal]], [[Motion rules]], [[Workflow rules]]


---
# [VAULT NOTE: Style/Motion tools stack.md]

# Motion tools stack

What Claude uses to make motion graphics, and how each piece reaches Premiere. Set up 2026-10-10 from 8 skill repos shared by the user.

## Current state
- **Plugin `motion-design-toolkit` (v1.0.0), sent 2026-10-10:** 36 full upstream skills with all references and scripts, plus `motion-video-pipeline` (the router). **Installed and active** (skills show as `motion-design-toolkit:*`).
  - Emil Kowalski (14, incl. animate, emil-design-eng, apple-design), GSAP official (8), Three.js (10), Rive, Wiggle, Text-to-Lottie with its player project.
- **Installed already:** `claude-design-skillstack` plugin (the "Claude Design Skills" repo) and the official Remotion plugin (enabled).
- **Superseded:** the 3 short skill cards (`motion-video-pipeline`, `lottie-logo-animation`, `web-motion-engines`). Don't save them; the plugin replaces them.
- **Tested:** transparent frame capture (Playwright) to ProRes 4444 with alpha (ffmpeg) works at 1080x1920, 23.976 fps. Not yet tested: a real piece in Premiere.
- Check which are active: ask Claude to list skills and plugins.

## Which tool for what
| Need | Tool |
|---|---|
| Logo, icon, lower third, transparent overlay | Lottie: `wiggle` (supplied logo) or `text-to-lottie` (authored) |
| Kinetic type, HUD, counters, charts, easing-heavy motion | HTML + GSAP |
| 3D, product spin, glow/shader looks | Three.js |
| Whole programmatic video | Remotion |
| Interactive app animation | Rive (not video by itself) |
| After Effects work | motion-principles, ae-procedural (no Dynamic Link) |

## How it connects to Premiere
Build seekable, capture frame by frame (Playwright), encode ProRes 4444 with alpha, import as plain clips on the XML timeline in bins. Text stays editable; only what Premiere text can't do is rendered. Full rules: [[Workflow rules]].

## Sources
- Wiggle: tanmayjain-bit/wiggle-claude-skill
- Text-to-Lottie: diffusionstudio/lottie
- Rive: BowTiedSwan/rive-skills
- GSAP (official): greensock/gsap-skills
- Three.js: CloudAI-X/threejs-skills
- Animate / Emil Kowalski: emilkowalski/skills (distilled into the pipeline skill's craft rules)
- Claude Design Skills: freshtechbro/claudedesignskills
- Remotion: official plugin

Related: [[Motion gauntlet]], [[Motion arsenal]], [[Motion rules]], [[Tools and connections]], [[Workflow rules]]
