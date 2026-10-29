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
