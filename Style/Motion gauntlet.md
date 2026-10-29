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
