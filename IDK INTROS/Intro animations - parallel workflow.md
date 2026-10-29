# Intro animations - parallel workflow

How the animations for the sections after the opening are made (Rachit, 2026-10-29). Several chats may work on different animations at the same time, so every chat follows these steps and uses [[Intro animations - tracker]] to avoid stepping on each other. This applies to the Claude Nine intro ([[Claude Nine intro - draft v1]]) and any later intro built the same way.

## How it works
1. **One animation per job, rendered on its own.** Each animation is a standalone clip, not baked into the full draft, so Rachit keeps control of where it sits on the timeline. An "in context" preview against the draft is optional and always a separate file.
2. **Rachit gives the current version** of that section (the draft clip or the file he is working from). Claude matches the animation to the voiceover and measures the length of each animation from it: where the line starts and ends, which words the beats land on. Voiceover files and timing CSVs: `Desktop\Work\INTROS\vo_final`.
3. **Match the draft's spec** unless told otherwise: 1920x1080, 24 fps, the draft's own style (for pixel-world scenes see [[Fern intro - pixel style (orange)]]; named moves in [[Motion systems (named)]]). Length = the length of that section in the current version, to the frame.
4. **Show key frames first** (house rule), then render. Check first, last and transition-midpoint frames before sending.
5. **Render formats:** MP4 for a preview. For anything that goes over the video's black background, deliver a `.mov` so it matches (see the open question below). Always write the full path of every file in the reply.
6. **Files:** each animation gets its own folder next to the draft, `Desktop\Work\INTROS\_claude_draft1\changeNN_<name>\`, containing the final clip(s), a preview, the SFX stem if any, keyframes, and `source\` so any chat can re-render it. Never overwrite a file another chat made: new version = new `vN` file.
7. **Tell the vault before and after** (this is what lets other chats work in parallel):
   - Before starting: open [[Intro animations - tracker]], add or claim the row for this animation, set status to in progress.
   - After every delivery: update that row only (status, latest file with full path, length in frames, what is waiting on Rachit) and add a line to the Log in [[IDK INTROS]].
   - Rules that apply to every animation go in this note, not in a chat. Style rules go in the style notes above.
   - Vault upkeep: Related line on every note, no orphans or broken links, Home's Map current.
8. **Edit only your own row.** Use a small replace on your own line; never rewrite the whole tracker from memory, another chat may have changed other rows.

- **.mov = transparent** (Rachit, 2026-10-29): ProRes 4444 with alpha, no background. Glows are keyed so they look identical over his black.

## Pixel animation rules learned on L09 (2026-10-29)
- Assets: the character = his `STEPS ANIMATION REFERENCE\character icon .jpeg` (37x47 grid, 13.65 px cells); the Claude icon = the pixel Claude spark from his terminal reference (12 irregular rays, hub ~1/3 of the radius, terracotta about RGB 218/119/86).
- Digital build-in (measured from his reference): solid block 2 frames (Claude: square, then the square minus a quadrant) -> coarse mosaic -> finer mosaic 2 frames -> rough -> clean. About 6-7 frames. Mass copies use a 3-frame version (block, mosaic, clean).
- Digital idle: every icon hops 1 art pixel up and back every 9-10 frames, hard step, no easing, each icon out of phase. "Thinking" = the spark turns in stepped increments on 2s.
- Multiplication feel (from the idk 3D TV ref, translated to 2D): each cut jumps an order of magnitude (1 -> 3 -> 9 -> ~100 -> ~600), depth from size + brightness only, a tunnel arrangement around the subject so they are surrounded, and a slow close-in at the end for claustrophobia.
- Cuts on the peak (from the Ajith motion piece): one continuous push through every version; each segment is a U curve (fast in, near-still, fast out), the cut sits on the speed peak, outgoing ends 108% and incoming starts 92% (his JUMP CUT system). A persistent anchor (the character) never moves between versions, like the red dot in that piece. Spawns happen as a resolve wave racing outward from the anchor, not as linear slides.

Related: [[Intro animations - tracker]], [[IDK INTROS]], [[Claude Nine intro - draft v1]], [[Motion systems (named)]]
