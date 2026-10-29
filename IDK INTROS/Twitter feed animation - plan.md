# Twitter feed animation - plan

Plan v1 (2026-10-29) for animation #2 of the Claude Nine intro ([[Intro animations - tracker]], row 2). Brief: [[Context - Twitter animation (cloud session)]]. Media: `change06_twitter_feed/` in the repo (current version, 5 references, 2 Figma frames).

## Current state
- Status: **key frames v2 sent** (2026-10-29), minimal redesign after Rachit's note on v1 ("phone much more minimal, everything looks chaotic"): `change06_twitter_feed/keyframes/v2/` (sheet `_sheet_v2.png`). v1 is superseded (kept in `keyframes/v1/`).
- **540p preview v5 sent** (2026-10-29): `change06_twitter_feed/previews/twitter_feed_preview_v5_540p_10s.mp4`, 239 f = 9.97 s @ 23.976 (Rachit: max 10 s, tightly paced, slowly ramping up but never rushed, premium; what's shown ends dead centre; every other post is filler).
- **Rachit's cut v5:** @__rockbiter eye video (opens on it, clip from 0:09.3 to catch the camera move) -> quick scroll -> @viipin8 highlight "CLAUDE + YouTube = $$$$ / Even a 14-year-old can do it." -> quick -> @neropursue video from 0:04 -> a little longer -> @IntCyberDigest highlight "Software is dead, long live software!" with the REA card kept in view below -> quick -> @himanshubuildss highlight "It's over." then down into the post to its video from 0:04 -> quick -> @imryven highlight "This is getting f*cking scary." then down to its spectrum video. Fillers (blurred, never read): noisy, charlie, deronin, olehmann, finn, humza, mike.
- The ref03 curve is resampled per scroll: quick 22-28 f, longer 30 f; scrolls and holds shorten slightly as it goes (the build). Inside-a-post moves down to the video use the same curve.
- **v6 (2026-10-29), Rachit: "don't centre whatever you're showing, it makes the screen UI go left and right".** Superseded the centring rule: the camera's x and zoom are now fixed for the whole piece (zoom 3.1, x on the content column), so the UI never slides sideways or scales; only the feed scrolls vertically, like a real phone. File: `change06_twitter_feed/previews/twitter_feed_preview_v6_540p_10s.mp4`.
- With 10 s the video windows are shorter than asked: eye ~1.2 s, motion ~1.3 s, It's over video ~0.8 s, spectrum ~1.2 s.
- Next: Rachit's notes on v6, then the final ProRes 4444 alpha render.

## Rachit's notes on preview v1 (2026-10-29) and what v2 does
- "The swipe up between posts looks cheap; I want the smooth scroll through Twitter; perfectly eased in and out." The v1 scroll used a fast-start "catch" curve (one-frame jumps of 38-81 grey levels, measured). v2: every scroll is a symmetric ease in-out (bezier 0.7,0,0.3,1, about 18 f). Mid-scroll the camera eases out 9% and the passing posts come up to about 40% (feel the feed, ref02/ref03). Vertical motion blur follows scroll speed, capped low. The frame-diff scan now shows smooth ramps only; the only hard jumps are the planned 2-frame flashes.
- "The opening looks cheap (post in the bottom half, X icon up top)." v2 opens on the X launch screen: the logo alone, centred on black, under "Every time you open Twitter". It leaves first, then the first post racks into focus (blur 14 to 0) at reading size, centred. No phone or header on screen.
- "White highlight looks cheap, use a little neon yellow." #EEFF3A marker, shorter than the line box, soft 6-pt leading edge while it sweeps, letters turn black only behind the solid part.
- "Focus change blur looks abrupt." Posts leaving focus fade and soft-blur (2.5 pt) across the whole scroll; text-post media recedes to 22% while the words are read ("text first").
- Charlie ("I turned Claude into an entire company"): no highlight, a brief stop only. Finn (AI-made video): text highlight only, no push into the video. My reading of the two notes; Rachit to confirm.
- Order: ... Finn, overload, "It's over." (text, then its video), "Software is dead" (REA post) is the last word.
- Glitch fixes: dims that snapped in one frame now ease over 8 f; video posters are now the first frame of the exact segment that plays, so starts don't jump.
- All tweets pulled from X (text, counts, avatars, media) into `change06_twitter_feed/tweets/<id>/`. Network was opened to full internet on 2026-10-29.

## Design system v2: minimal (Rachit, 2026-10-29)
Learned from the idk references (ref04, ref05): a pure black void, one thing to read at a time, nothing on screen that isn't being read. This replaces the "phone: subtle and premium" section below (the tilt, titanium bezel, glass and rim light are gone).
- **Flat camera.** No 3D tilt or perspective. The camera only zooms and moves straight. Moves are smooth; cuts land on the speed peak.
- **The phone is a hairline:** a 0.6 pt outline at 16% white plus the island. No frame, no glass, no glow. It's seen whole and small only at the wake and the overload. When reading, its two edges stay as thin vertical lines at the frame sides, the only hint of a device.
- **Header = the X mark only.** No status bar, tabs or avatar. The new-posts pill is a white capsule with black text.
- **One post at a time.** The focused post is full white. Every other post recedes to 6-10% (still felt as a feed while scrolling, never read).
- **Inside the focused post:** key text full white with a faint glow, the rest at 35%. "Show more" at 10%. Each post shows only the lines being read.
- **Framing:** text posts at 2.9 px/pt (the post about 1,000 px wide, big black margins, like idk), videos at 2.9-3.2, "It's over." at 6.2. Posts are always centred horizontally.
- **Highlighter** as before: a marker that reveals black letters as it passes. Orange only when the post names Claude.
- **Overload:** a clean fast scroll of the small phone (light blur only, no smear) plus 2-frame hard cuts to single lines. The v1 streak smear read as noise.
- **Media recedes during a text hold** (for example "It's over.") and comes back when the camera moves to it.

## Key frames (v1 sequence, kept in v2): the sequence
One continuous dark-mode feed, in this scroll order. The age ladder opens it ($2.4M at 18, then "even a 14-year-old"), then the videos of people doing wild things with Claude, then it collapses ("Software is dead", the flashes, "It's over."). About 21 s at 23.976.

| KF | Frame | Post | What happens |
|---|---|---|---|
| 01 | 0 | - | Wake: screen lights up, the phone huge, tilted, its edge barely visible |
| 02 | 14 | @noisyb0y1 | Slow flick, the thumb catches post 1 (phone view) |
| 03 | 30 | @noisyb0y1 | Blur-punch into the text. White bar: "making $2.4M with Opus 5 at 18" |
| 04 | 64 | @viipin8 | Flick, catch, punch. Bar sweeping "Even a 14-year-old can do it." |
| 05 | 98 | @charliejhills | **Orange** bar (it names Claude): "I turned Claude into an entire company." |
| 06 | 124 | @charliejhills | Rack-focus down into the org chart: 42 orange crabs light up |
| 07 | 158 | @mimurchison | Video post, autoplays, push-in, **sound on**: tight cut of "how I'm using Claude Code as my primary system to run both my personal life and my company" |
| 08 | 286 | @DeRonin_ | Article card, bar on "I run a $40k MRR agency with zero employees" |
| 09 | 316 | @neropursue | Video focus: the motion gallery (orange dot). Aimed at a motion designer |
| 10 | 352 | @finnardley | Text punch, bar "entire channel in 10 minutes" |
| 11 | 380 | @finnardley | Secondary focus: their Sun-vanishes video counting down |
| 12 | 410 | @IntCyberDigest | Bar on "Software is dead, long live software!" |
| 13 | 436 | - | Pull out, fling: the feed smears, header stays sharp, "99+ new posts" |
| 14 | 452 | @itsolelehmann (+ @humzaakhalid) | 1-2 frame flashes: "was just ONE PERSON", "with zero employees" |
| 15 | 470 | @himanshubuildss | Hard catch, the biggest punch: "It's over." |
| 16 | 500 | @himanshubuildss | Slow scroll down to the AI-made 3D sites video, then a hard cut into line 11 |

Extra posts I found (not from Rachit): @itsolelehmann (Anthropic growth team = one person, 4.5M views) and @humzaakhalid (10-person company with zero employees), used only as flashes; @finnardley was found by searching for the Kurzgesagt post. The "one-person company MRR" visual = @DeRonin_'s article card.

### Mike's clip (tight cut, from the source video, word times by speech-to-text)
"how I'm using Claude Code" 22.64-24.20 / "as my primary system" 24.74-27.48 (drop the 1.7 s pause inside) / "to run both my personal life and my company" 28.36-31.72 (drop the pause before "my company"). About 5 s instead of 9.1 s. Jump cuts hidden by the push-in.

## Why the old version failed (client: "the effect of Twitter isn't coming off")
Measured on `current/old_twitter_animation.mp4` (4.13 s, 23.976 fps). The feed is a narrow column about 200 px wide (about 10% of the frame), text about 8 px tall, and nothing is ever read. New posts just push in from the top, there's no phone, no scroll gesture, no stop and no focus. It reads as a texture, not as "I'm on Twitter". The fix is to make the viewer **read** a few posts at full size and **feel** the thumb (flick, coast, catch).

## What the references teach
**ref04 idk channel, how they focus tweets (most important).** Real screenshots on pure black, no phone. Each post holds about 0.8-1.2 s and they hard-cut between posts.
- Focus is a **rack-focus punch-in**: a 3-4 frame blur ramp (peak at 2.68 s), then the same post scaled about 1.35x and cropped by the frame edge.
- Key words stay full white while the rest drops to about 35% grey.
- A slow push-in (about +2% per s, slight drift) runs under every hold, so nothing is dead still.
- Quote tweets stack, and a reply ("no.") is revealed by a slow scroll down.

**ref05 idk channel, highlight.** A small post on black, then a blur cut (3 frames) into a big crop with soft depth-of-field edges.
- About 0.3 s still, then a **highlighter bar sweeps left to right over about 0.55 s**: fast start, slow finish, like a real marker. "I'm" is covered in 2 frames, then "Claude" slows.
- Their colour is lime (about #C6F432). Text after the phrase fades to grey with a left-to-right gradient.

**ref02 UI inside a phone (light).** The phone is never shown whole. The camera sits close on the top half of the device, with the rounded corners and status bar barely in frame.
- The camera drifts down and out as the content scrolls. Tabs swipe sideways with ease-out (about 0.4 s each).
- The phone edge is only a soft shadow on the background. That's the "subtle phone" look.

**ref01 dark UI in a phone.** Dark-mode X feed with **video posts autoplaying inline**. A second phone sits small and dimmed behind (depth). Skeleton loaders between states.

**ref03 blur and scroll (Envato template).** One post in focus and its neighbours blurred during the scroll, so the eye has one place to go. Animates over alpha.

**Figma.**
- `fig2_x_post_mockup_dark_light.png`: modern X post cards, dark and light, in an iPhone with a Dynamic Island. **This is the base:** header X mark, name + verified + handle + date, body, media card, action row (13.1k / 11.2k / 36.3k / 97.4k + share).
- `fig1_twitter_ui_screens_overview.png`: the old bird-era kit (2020, light). Use it only for extra screens if needed: the tweet detail, the full-screen video player with its scrubber, "new posts".

## The concept: one doomscroll, in first person
The viewer IS the thumb. One phone, dark mode, one continuous scroll that keeps stopping on things that hurt, and stops for less time each round. Wins and dystopia alternate, so every stop is "someone else is winning / the world is moving without me". It ends in a fling so fast the feed turns to streaks, then a hard cut into line 11 ("And there's this constant anxiety").

### Beat sheet (about 12-15 s, not tied to the VO, as Rachit asked)
| # | Beat | What happens | Time (approx) |
|---|---|---|---|
| 0 | Wake | Black. The phone screen lights up (wake, no lock screen), dark X feed already there. The camera is close, top of the phone, the edge barely visible. VO "Every time you open Twitter" starts on the screen-on, not before (sync rule). | 0-0.8 s |
| 1 | First flick | A slow, human scroll (coast and catch) lands on post A, a text post. | 0.8-1.6 |
| 2 | Focus A | Rack-focus punch-in to post A (the phone leaves the frame). Neighbours blur, the key phrase stays white, the rest dims, the **highlighter sweeps** the worst phrase. Hold 1.6 s. | 1.6-3.4 |
| 3 | Pull back + flick | Blur-pull back to the phone (reverse punch), a quicker flick lands on a **video post**. | 3.4-4.2 |
| 4 | Video B | The video's still frame autoplays about 8 frames after the scroll settles (how X really does it). Push in until the video fills about 70% of the frame and play the crazy moment for about 2 s. Live counters tick up (views stepped). | 4.2-6.4 |
| 5 | Flick while playing | The video keeps playing as it scrolls away (never pause on exit). Text post C: punch-in + dim/white, no highlighter (hold 1.0 s). | 6.4-7.8 |
| 6 | Escalation | Post D (video, 1.2 s), post E (text, 0.7 s), post F (0.5 s). Each stop is shorter and each flick faster. The "↑ new posts" pill grows: 3, 12, 48, 99+ (stepped). | 7.8-11 |
| 7 | Overload | A long fling: motion blur turns the posts into light streaks, 2-3 single-frame flashes of key phrases (white on black, ref04 style). | 11-12.5 |
| 8 | Exit | A hard stop on one last line, or a JUMP CUT out on the peak, into line 11. | 12.5-13 |

Wins vs dystopia order (to fill from Rachit's tweets): win, dystopian, win (video), dystopian, then flashes of both.

## How each piece is done
### Highlighting key text (text posts)
1. Land: the scroll settles with the post's text block on the frame's optical centre.
2. Punch in on a peak: a 3-frame blur ramp (gaussian about 0 to 18 to 0 px) while scaling the phone camera 1.0 to about 2.2x. The cut is hidden inside the blur (same idea as the speed-matched motion cut).
3. Dim: non-key words fade to 35% over 6 frames, ease-out. Key words stay 100%.
4. Highlighter: only on the 1-2 hardest posts. The bar is a slightly ragged rectangle, 1.15x the line height, with the text knocked out on top. Width animates left to right over 13 frames (0.55 s at 23.976) with an ease-out cubic. Multi-line phrases sweep line by line with a 2-frame gap.
   - **Colour:** Claude orange #D97757 only when the phrase is about Claude/AI agents (brief rule: orange = Claude). Otherwise an **inverted white bar with black text**, which reads like the idk highlight but stays in our white-or-orange palette.
5. Under every hold: a slow push of +2-3% scale, so it never sits dead still.

### Stop-and-play videos, naturally
- While scrolling, a video post shows its first frame with a play badge, as X does. Playback starts about 6-8 frames after the scroll settles and the video is more than 50% visible. No fade: it just starts, like the real app.
- Push in during the first 0.5 s of playback, so the motion carries the start.
- The duration chip counts down ("0:14", "0:13"...) and a mute icon sits bottom-right. Optional: the clip's own audio fades in for about 1 s under the music (muted to unmuted), then dips as you flick away.
- On exit the video keeps playing while it scrolls off.
- I trim each clip to its single most insane 1.5-2.5 s. Remotion plays the real MP4 in sync, frame-accurate.

### The scroll itself (what makes it feel real)
- iOS momentum: a flick gives a start velocity of 2,500-6,000 px/s (in phone points), decaying about 0.998 per ms (UIScrollView "normal" deceleration).
- A **catch** is a finger touch that stops it in 3-4 frames. Every stop is a catch, not a soft ease, because that's how a thumb stops on something.
- Vertical motion blur scales with speed (none below about 600 px/s). The status bar and X header stay fixed while the feed moves under them.
- Two-speed rule from the brief: the scroll and camera are smooth at 23.976. Counters, the new-posts pill and the overload flashes are **stepped** at about 12 fps.

### The phone: subtle and premium
- Dark-mode iPhone from fig2 (Dynamic Island, thin black titanium edge), on black. The device is almost invisible. Only a thin **rim light** on the edge and the screen's own light show it.
- **Screen glow (intro style lock):** the screen casts the two-layer glow onto the black around it (tight 2 px bloom plus a soft 30-40 px halo at low opacity). It feels like light from a screen in a dark room and ties it to the other animations.
- **Never the whole phone.** The camera frames the top 55-70% of it, cropped by the frame, tilted 4-6° in 3D (slight perspective). It drifts slowly the whole time (ref02).
- The phone leaves the frame entirely on punch-ins and comes back on pull-backs, so most of the time we're reading, not looking at a device.
- **Optional depth (ref01):** 1-2 more phones far behind, dim and blurred, also scrolling. It hints that everyone is scrolling. Only if it doesn't clutter.

### Fit with the rest of the intro
- Transparent ProRes 4444 at 1920x1080, 23.976, plus an MP4 preview on black. The length is set by this plan, not by the old clip.
- Colour: white/grey for the world and the feed. Orange only where Claude is meant. X's blue verified ticks, links and like-red: keep them or grey them? (question for Rachit)
- Cuts land on the speed peak. JUMP CUT available for the exit. Sync rule: beats start on the syllable, nothing anticipates.
- The UI itself stays **crisp, not pixel art**. It has to read as the real app for "the effect of Twitter" to land. The pixel world touches it only at the edges: the overload flashes could use the Fern encode reveal, and the exit could dissolve in pixels. Rachit decides.

## Build
- **Remotion** (React), tested reachable here (remotion 4.0.539 on npm). X UI rebuilt as components from fig2, so every word is real text (sharp at any zoom) and posts come from a `tweets.json`. Swapping a tweet means editing one line.
- Renders straight to ProRes 4444 with alpha; Playwright/ffmpeg is the fallback.
- Font: X uses Chirp (not free). Inter is installed and is the stand-in unless Rachit has Chirp.
- Process: key frames (stills per beat with frame number), then a 540p MP4 preview with VO, then the final. All source goes in `change06_twitter_feed/source/`.

## What I need from Rachit
1. **The tweets.** For each one: the link, a screenshot, the exact text, the name/handle/avatar, the counts, the date. I can't open x.com from this session, so screenshots are the source of truth.
2. **The videos as MP4s.** I can't download from X here, so please send the files for the video posts.
3. Chirp font files if he has them; otherwise Inter.
4. The frame before and after: the last frame of L09 and the first shot of line 11, so the entry and exit match.
5. Answers to the questions in chat.

## Facts and rules to respect
- Real posts are shown as posted: exact text, real handle, real counts at capture time. No edits to make them sound worse. That replaces the brief's "invented handles" rule (assumed from Rachit picking real tweets; to confirm).
- Practice piece. Before publishing, check rights for the X videos (other people's footage), per [[Workflow rules]].

Related: [[Context - Twitter animation (cloud session)]], [[Intro animations - tracker]], [[Intro animations - parallel workflow]], [[Motion systems (named)]]
