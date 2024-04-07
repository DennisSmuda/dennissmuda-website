# Personal Website 👨🏻‍💻

[![Playwright E2E-Tests](https://github.com/DennisSmuda/dennissmuda-website/actions/workflows/playwright.yml/badge.svg)](https://github.com/DennisSmuda/dennissmuda-website/actions/workflows/playwright.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5487d096-f9f1-496e-8ae4-613220817b9a/deploy-status)](https://app.netlify.com/sites/dennissmuda/deploys)

This is the code for my website! You can [see it live](https://dennissmuda.com/) here!

<p align="left" style="padding: 4rem 8rem 4rem 0;">
<img style="float:middle" width="auto" alt="PAGESPEED" src="./public/pagespeed.svg">
</p>

| Dark Theme                                | Light Theme                     |
| ----------------------------------------- | ------------------------------- |
| ![screenshot dark](./screenshot-dark.png) | ![screenshot](./screenshot.png) |

## Developing 🛠

After you've cloned/forked/whatever the repo, you can do this:

```bash
npm run install
npm run dev
```

## Tests 🧪

Tests run on [github actions](https://github.com/DennisSmuda/dennissmuda-website/actions), everytime a PR gets opened.

To run playwright locally, I recommend the official [vs code plugin] - which is amazingly convenient - you can also just run `npm t`. But you have to `useExistingServer` inside `playwright.config.js`.

## Contributions 🥁

Feel free to submit PRs or [issues](https://github.com/DennisSmuda/dennissmuda-website/issues) 👋
