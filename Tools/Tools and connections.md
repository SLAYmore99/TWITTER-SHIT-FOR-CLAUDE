# Tools and connections

| Tool                              | What it's for                                                                                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| invideo (connector)               | Full editor over MCP: timelines, uploads, stock, AI generation, custom shader effects/transitions, exports                                                                                          |
| Adobe (connector)                 | Adobe Stock search and licensing, image edits, fonts, PDFs, quick video edits                                                                                                                       |
| Figma (connector)                 | Read/write designs                                                                                                                                                                                  |
| Google Docs (connector)           | Read and edit docs                                                                                                                                                                                  |
| Claude Design Skillstack (plugin) | Web animation, 3D, Lottie, Rive, design audits                                                                                                                                                      |
| Motion skills                     | motion-principles, motion-critique, ae-procedural, ae-editable-build, vo-retime-motion-critique, plus motion-video-pipeline, lottie-logo-animation, web-motion-engines (see [[Motion tools stack]]) |
| Desktop link                      | Folders on this PC, built-in browser, computer use                                                                                                                                                  |
| This vault                        | Shared memory across all chats, including Project chats                                                                                                                                             |

## Notes
- invideo: only one connector now, `Invideo` (the broken duplicate `InVideo` was removed 2026-10-10). Signed in as rachitreturns@gmail.com.
- invideo connector address: `https://mcp.invideo.io/sse` (the first attempt failed; it worked on retry).
- invideo website won't sign in inside Claude's built-in browser ("couldn't verify this browser"). Use the connector, or regular Chrome.
- Claude chat search can't cross into Projects. This vault is the bridge.
- Big file transfers from the cloud to this PC: split into ~25 MB zip parts and check md5. Plain media files once arrived altered; obfuscating them (XOR) before sending and checking md5 after fixed it.
- Figma: connected through the account SLAYMORE (Starter plan, View seat). Read-only in practice; **20 MCP calls a month** on the free plan. Reading one board's structure takes 1 call; screenshots cost 1 each. Paste a figma.com link to use it. Upgrading needs the Professional plan plus a Full seat (to design) or a Dev seat.

Related: [[Workflow rules]], [[Home]], [[Motion tools stack]], [[Reference library]]

- Skill **reel-motion-cuts**: motion cut spec, slides, Ken Burns, match cuts and B-roll rules for reels. Loads in any chat, even without the vault. Mirrors [[Motion cut - how it really works]]; update both together.
