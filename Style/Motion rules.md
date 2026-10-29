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
