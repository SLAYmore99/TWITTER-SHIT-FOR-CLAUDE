---
name: reel-motion-cuts
description: Use when editing or reviewing short-form vertical reels (B-roll cuts, motion cuts, slides, Ken Burns, match cuts) in Premiere/AE or code, to make cuts feel smooth, premium and dynamic.
---

# Reel motion cuts and B-roll motion

Learned from frame-by-frame measurement of a top editor's reels (Gemini 4 Argon tech reel, PayPal Mafia story reel, Oct 2026). Numbers are at 1080x1920. If Rachit's Obsidian vault is connected, also read `Style/Motion cut - how it really works.md` and the client note before editing.

## 1. The core idea
A motion cut is not a transition dropped on a cut. It is one continuous camera move running through several shots, with each cut hidden at the fastest frame. Between moves the picture is almost never fully still.

## 2. The speed-matched motion cut (exact spec)
- X position only. No scale change, no blur. (Scale + blur looks cheap.)
- Outgoing shot: builds speed over its last 8-12 frames (expo ease-in) and reaches peak speed ON its last frame.
- Cut exactly on that peak frame.
- Incoming shot: starts at the same speed, same direction (50-110 px/frame, up to ~190 on a whip), then decelerates hard. Speed roughly halves on each of the first 2-3 frames, then decays slowly (expo ease-out).
- It never stops. It settles into a slow drift of 3-6 px/frame (~75-150 px/s) in the same direction, then builds again into the next cut.
- Travel per shot: ~100-350 px normally, up to ~700 px on a fast 1 s shot.
- Keyframes: 2 Position keyframes per shot (start offset, end offset). The speed graph is a U shape, high at both ends and a low drift in the middle. NOT easy ease, which stops at both ends. Shots must be wider than the frame (or scaled a little) so the edges never show.
- Wrong ways: a dead-still shot that only moves at the cut, a short 5-frame exit, an entry that decays to a full stop, always the same direction.

## 3. Direction
- Default: chain to the left.
- Reverse to the right to mark a new beat or a return.
- Ping-pong (L, R, L, R) on fast lists of examples. To reverse inside a shot, let the drift slow to zero and build the other way.

## 4. Variations
- ENTRY-ONLY slide: hard cut, new shot arrives already fast (~100 px/frame) and glides to rest over 0.3-1.5 s. Good for photos and reveals (the same wide photo from left, then from right to reveal a second person).
- EXIT-ONLY slide: a pan builds to ~60 px/frame on its last frame, then a hard cut to a still A-roll card.
- Slide into and out of the A-roll card too; the card glides in and settles.
- EXPAND-THROUGH: a framed photo on a background grows to full bleed and becomes the next shot.
- Pan across a wide or group photo: enter fast, ease out over 1-1.5 s.
- Stills are never still: Ken Burns push-in +20-35% over 1-3 s on cutouts and photos. Wide establishing shots get a push too.
- Face match cuts: different shots of a person (or several people) with the face locked to the same spot, 0.15-0.5 s each. Great as a hook opener, with a small caption building word by word.

## 5. What never moves
Captions, logos and bugs, number counters, and key text being read. Never slide the background while a stat or keyword sits on top. Use hard cuts there.

## 6. Which style to use
- Tech / explainer reel with lots of footage and UI: chain speed-matched motion cuts through the body. Hard cuts in the split-screen hook. Brand sweep or flash at section changes.
- Story / people reel with photos: mostly hard cuts on the beat, plus entry-only slides, photo pans, Ken Burns and face match cuts. Maybe one or two full motion cuts.
- Any reel: if a move can be removed without losing anything, remove it. Same graphic continuing = swap content in place, never cut or slide to an identical layout.

## 7. B-roll choice (goes with the motion)
- Mute test: with the sound off, would this shot explain the line? If not, change it.
- People over logos and UI: CEOs for companies, a technician for "fixing bugs", a gloved hand holding a chip for "quantum computers", the founders' faces for a company name.
- Literal and physical beats clever or abstract.
- Put the proof in the hook (chart in the top half of the split on "so powerful").
- Fewer, stronger shots: 1-2.5 s each. Let a good shot run across a line instead of chopping to hit a count.
- Use split screens to compare two people or things.
- Captions in 2-4 word chunks.

## 8. Check your own work
- Measure horizontal speed per frame (e.g. OpenCV phaseCorrelate on bands of consecutive frames, ignoring caption rows). Plot speed with cuts marked. Each motion cut should show the peak exactly on the cut, continuous speed across it, and no flat zero between moves.
- Look at the frames on both sides of every cut and the midpoint frames, not just the cut.
- Compare with the client's reference by playing both side by side in sync.
