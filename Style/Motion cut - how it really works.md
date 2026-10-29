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
