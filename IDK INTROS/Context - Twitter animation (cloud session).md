# Context: Twitter feed animation for the "Claude Nine" intro

Paste this whole note into the new session. It is self-contained: that session has none of the history of the chat where the other animations are being built.

## Who and what
- You are working with Rachit, a video editor (Premiere Pro, Bengaluru). He is building a Fern-style YouTube intro about Igor Babuschkin's short story "Life on Claude Nine". This is practice work, not a client job.
- You build **one animation**: the Twitter/X feed beat. Other animations are being built in parallel in other chats. Do not touch them.
- He edits the animation into his own timeline, so deliver it **as a separate clip**, not baked into the full video.

## The beat
- Voiceover line 10: **"Every time you open Twitter, you see someone winning."**
  - In the master VO (v2) the line runs 26.456-28.886 s (2.43 s). Line 9 before it ends at 25.606 s ("...taken the first step"). Line 11 after it starts at 29.286 s ("And there's this constant anxiety").
  - The VO was retimed inside the draft, so **take the timing from the current version Rachit gives you, not from these numbers.**
- Idea: you open the feed and every post is someone winning. It should feel like a scroll of other people's wins, building pressure that leads into "constant anxiety" and "you're falling behind".
- What exists now (in his draft): an X-style **pixel feed** of "winning" posts with **invented handles**, stylised, with the xAI mark in the header. Rachit will give you the current version and any reference he wants it to match. Ask him what he wants changed before designing.

## Before you build anything
1. Ask Rachit for:
   - the current version of this section (to match the VO and measure the exact length in frames)
   - any reference videos for the new look
   - the asset files (character icon, Claude icon, xAI mark if used)
2. Study every reference frame by frame before designing: contact sheets, full-frame-rate strips around every transition, and how motion speeds up and slows down. Tell him what you learned.
3. Find the VO word timings in his clip: where each word lands, in frames. No speech-to-text may be available. If so, measure from the audio energy and fricatives (s, f, t), say that you did, and ask him to confirm the key hits by ear.
4. **Show key frames first** (stills at every beat, labelled with frame number and VO word). Then a **low-quality preview render** (540p MP4 with VO). Do the final render only after he says go.

## Style lock (pixel / CRT world, same as the other animations)
- **Background:** transparent in the final file. Previews go on black (his video's background is near-black).
- **Colour carries meaning:** white = humans and the world; **Claude orange** (terracotta, about RGB 218/119/86; glow halo #D97757) = Claude and anything it does. Keep everything else white or grey. Use orange only where Claude is meant.
- **Pixel art:** hard-edged pixels scaled with nearest neighbour. Solid white fills with dark line details cut in, no outline drawings. Sparse, centred layouts, one idea per frame, big empty margins.
- **Screen glow (he wants it):** a two-layer glow on everything. A tight bloom (about 2 px) so edges hit full white, plus a soft wide halo (about 15-45 px) that fades out. It should feel like light on a computer screen.
- **Type:** bitmap/terminal faces. Condensed terminal caps for labels, lowercase terminal for typed text, chunky game caps for titles. Typing uses a block cursor and is stepped (4-5 characters per step).
- **No squares:** Rachit rejected spawn effects that read as plain squares or blocky placeholder rectangles. Elements should appear in their own shape: pixel dissolve, dither, or scan-line encode.
- **Text encode reveal (Fern):** each character cell walks empty -> 25% dither -> 50% checker -> 75% -> solid -> the letter. It reads as a moving bar, 4 cells per band, stepped every 2-3 frames, never smooth.

## Motion rules
- **Digital idle:** every icon or element hops 1 art pixel up and back every 9-10 frames. It is a hard step with no easing, and each element is out of phase with the others. A rare one-frame horizontal jitter is fine. Nothing sits dead still, and nothing floats or breathes smoothly.
- **Two speeds:** layout and camera moves are smooth at full frame rate. Everything "digital" (typing, encodes, pops, feed scroll steps) is stepped at about 8-12 fps.
- **No linear motion.** Entrances are fast-in with a soft landing (ease-out). Exits are about 70% of the entrance time.
- **Cuts land on the peak of the motion curve.** One continuous move runs through the cuts. The outgoing shot accelerates into the cut, and the incoming shot starts at the same speed and decelerates. Speed must be continuous across every cut.
- **Rachit's named moves** (use them when he names them):
  - **JUMP CUT:** outgoing 100->110% scale over 10 frames, ease-in (accelerating). Hard cut. Incoming 90->100% over 10 frames, ease-out. Scaled about the frame centre.
  - **slide up:** starts 50 px below and rises to place over 10 frames, ease-out. Opacity 0->100% over the first 5 frames, linear.
- **Sync rule (measured from Fern):** in the pause before a phrase, the picture is still. The next beat starts on the first syllable, 0-50 ms after the voice. One phrase = one beat. Nothing anticipates the word.
- **Premium means subtract:** if a move can be removed without losing anything, remove it.

## Content rules
- **Feed posts are illustrative:** invented handles and invented posts, clearly stylised pixel cards. Don't fake real tweets from real people or real accounts. Logos only from official sources.
- Flag any on-screen claim that goes beyond what's sourced.

## Delivery
- Size and rate: **1920x1080**, same frame rate as his current version (his clips are 23.976 fps; check with ffprobe). Length = exactly the length of the section in his version, to the frame.
- Final file: **.mov ProRes 4444 with alpha** (transparent, no background). A glow over black should come out identical when he lays it over his black.
  - Example encode: `ffmpeg -framerate 24000/1001 -i f%03d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -vendor apl0 out.mov`
- Also deliver an **MP4 preview with the VO**, on black.
- Check before sending: first frame, last frame, the frames either side of every cut, the midpoint frames of every move, and alpha (corner pixel transparent). Confirm length and frame rate with ffprobe.
- **No After Effects Dynamic Link.** If he wants the animation editable, ask first.
- Folder naming, if you can reach his computer: `C:\Users\rachi\Desktop\Work\INTROS\_claude_draft1\change06_twitter_feed\`. Put the final .mov, the preview, key frames, and a `source\` folder with your build scripts so it can be re-rendered. Never overwrite another chat's files; each new version is a new `vN` file.
- When you tell him where a file is, always write the **full path**.

## Shared notes (only if his Obsidian vault is connected to your session)
- Vault path: `C:\Users\rachi\Documents\OBSIDIAN AND CLAUDE\New folder\VAULT FOR CLAUDE MEMORY`.
- Before starting, read these, all in `IDK INTROS/`:
  - `Intro animations - parallel workflow.md`
  - `Intro animations - tracker.md`
  - `Fern intro - pixel style (orange).md`
  - `Claude Nine intro - draft v1.md`
- Then read `Style/Motion systems (named).md`.
- Claim **row 2 (Twitter feed)** in the tracker. Update only your own row, and add a line to the Log in `IDK INTROS/IDK INTROS.md` after each delivery. Never rewrite the whole tracker: another chat is editing row 1 at the same time.
- If the vault is not connected, write up the decisions you made and the files you delivered at the end, so Rachit can paste them into the vault himself.

## Talking to Rachit
- He works fast and directly. Show him; don't describe at length. Key frames first, then a low-quality preview, then the final.
- Check your own output frame by frame before sending. He will notice a stray frame or a broken rule.
- If something he asks for can't be done, or you're unsure what he means, ask one short question.
