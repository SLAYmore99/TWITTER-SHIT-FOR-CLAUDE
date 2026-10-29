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
