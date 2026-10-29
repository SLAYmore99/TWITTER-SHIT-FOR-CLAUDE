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
