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
