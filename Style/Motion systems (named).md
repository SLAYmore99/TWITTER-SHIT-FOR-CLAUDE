# Motion systems (named)

Reusable moves that Rachit calls by name. When he says "JUMP CUT" or "slide up", build exactly this, for every project. Terms are After Effects ones: **"out"** = Easy Ease Out on the first keyframe (starts slow, fastest at the end). **"in"** = Easy Ease In on the last keyframe (fastest at the start, slowest at the end). "10 keyframes" = 10 frames.

## JUMP CUT
| | Frame A (outgoing) | Frame B (incoming) |
|---|---|---|
| Scale | 100% → 110% | 90% → 100% |
| Length | 10 frames | 10 frames |
| Graph | "out" (accelerates, fastest at the end) | "in" (decelerates, slowest at the end) |
| Join | hard cut on the last frame of A | B starts on the cut frame |
- Scale about the comp centre. The two speeds meet at the cut, so the eye reads one continuous push across a hard cut.
- Code values: A = ease-in cubic `cubic-bezier(0.55,0.055,0.675,0.19)`; B = ease-out cubic `cubic-bezier(0.215,0.61,0.355,1)`. AE: A's first key Easy Ease Out, influence about 75%; B's last key Easy Ease In, influence about 75%.
- Motion blur stays inside each frame (forward shutter). Never blend A and B across the cut.

## slide up
- Position: starts **50 px below** the comp centre and rises to centre over **10 frames**, "in" graph (fastest at the start). Code: `cubic-bezier(0.215,0.61,0.355,1)`.
- Opacity: **0 → 100% over the first 5 frames** (linear), then holds.

## Where used
- [[Twitter feed animation - plan]]: the section's in-animation (v7, 2026-10-29). The whole feed does a slide up, matching how idk brings tweets in (ref04 at 1.55 s).
- [[Claude Nine intro - draft v1]]: blog beat v3 (2026-10-28). The page does a slide up on "In January", then a JUMP CUT from the wide page to the title on "he published".

Related: [[Motion rules]], [[Motion cheat sheet]], [[Motion gauntlet]]
