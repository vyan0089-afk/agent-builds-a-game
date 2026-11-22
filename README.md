# One Prompt, One Game

My AI agent built a tiny Snake game from a single prompt — and this video shows it happening: the prompt, the agent working, and the finished game running.

[![post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/vyan0089-afk/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/vyan0089-afk/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

The prompt: "Build a tiny Snake game in one HTML file: arrow keys steer the snake, eat the glowing dots to grow and score, don't hit the walls or yourself."

The video (35 seconds, 16:9) shows the prompt, the agent writing the game's code line by line, and the finished Snake game actually playing — the snake eats, grows, and the score ticks up — then ends on make.fun's referral card. The game itself is in this repository as `game.html`: a single self-contained file, playable in a desktop browser with arrow keys or WASD. No network needed.

`main.ts` copies `POST.json` (the address of the post on X carrying the video) to `/output`. The post's views and interactions rank the entry: score = views + 10 × (likes + reposts + quotes + replies).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
