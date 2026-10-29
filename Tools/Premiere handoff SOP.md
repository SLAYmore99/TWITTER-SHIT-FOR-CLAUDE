# Premiere handoff SOP

How Claude hands a finished reel over as a Premiere project. First used on [[Creator project Oct 2026]] (Rajiv reel, Oct 2026). Follow this for every reel unless Rachit says otherwise.

## What goes in the package
Folder: `<project>/Premiere/`
- `<name>.xml`: FCP7 XML. Import with File > Import. It builds bins: **A-roll**, **Graphics**, **Audio**, **Captions**, **Sequences**.
- `Graphics/Gxx_<layout>_<scene>.mov`: one rendered clip per scene, PNG codec with alpha, 1080x1920, 25 fps. A = keyword type over A-roll, S = split (white top panel), W = full white page.
- `Audio/SFX/`: whoosh, hit, pop, tick, typing, enter, copied from Rachit's Sound Effects folder.
- `Captions/`: two SRTs. `word_by_word` builds the line one word at a time (creator style). `3word` is one 3-word block per caption.

## Timeline layout
- **V1, A-roll:** the original camera file as a single layer (Rachit relinks it himself). It is cut only where the layout changes. Each cut carries Scale and Position keyframes: the slow zoom drift on talking shots, and a Position offset of +490 px down on split scenes so the face sits in the bottom half. 4K source on a 1080x1920 sequence means 50% scale = fit.
- **V2, Graphics:** the rendered clips, starting exactly where each scene starts.
- **A1/A2:** camera audio. **A3/A4:** SFX at -15 to -20 dB.
- **Captions:** import the SRT, drag it onto the sequence (it becomes a caption track), set the style, then save it as a Track Style.

## Caption style (Rajiv)
Apple Tea 64 px, white, letter-spacing 2, shadow 0/6 px, 60% opacity. Position about 62% height on talking shots, about 81% on split scenes. On full white scenes, use a black box behind white text. Captions are off while a keyword stack is on screen; the SRTs already leave those gaps.

## After import, check these
1. Relink v1 if it shows offline.
2. Split scenes: the face should sit in the bottom half. If the Position offset came in wrong, set Position Y to 1450 (960 + 490) on those A-roll segments.
3. Zoom keyframes are linear between 7 samples per shot. Add easing to taste.
4. Play the captions against the audio. Word timings were aligned by Claude from the audio's pauses, not by Premiere transcription, so nudge any that drift. Better still: run Transcribe in Premiere and replace the SRT.

## What stays rendered and why
Keyword stacks (letter-by-letter mask reveal), logo pops, cards, bars, counters and the car scene are rendered clips, because Premiere text can't do those animations through XML. Captions stay editable.

## Moving big files from Claude to the computer
The transfer tool alters .mov/.mp4 headers when it carries them. Always gzip, split into 24 MB parts, join on the computer, then check the md5. Text files (XML, SRT) carry over safely as they are.

## Layered version (Rachit's preferred, Oct 2026)
When Rachit wants to adjust things by hand, deliver **one continuous clip per layer, no cuts**, in `<project>/Premiere_v2/`:
- **V1 A-roll:** the camera file as one uncut clip. All zoom drift and split-screen offsets are Scale/Position keyframes on that single clip.
- **V2 Animation:** one full-length transparent .mov with every graphic and keyword stack.
- **V3 Subtitles:** one full-length transparent .mov of the rendered captions (exact look), plus the SRTs for an editable caption track.
- **A1/A2** camera audio, **A3/A4** one SFX stem .wav.

Related: [[Workflow rules]], [[Creator project Oct 2026]], [[Caption styles]], [[Tools and connections]]
