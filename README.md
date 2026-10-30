# Flow

Flow is an Android personal-finance app foundation built with React, TypeScript, Vite, and Capacitor. The current project focuses on the web-to-native connection and a foundation screen that reports platform and engine status. It also includes theme tokens, app identity, native bridge interfaces, and local preference storage support. This README does not describe finance workflows such as tracking transactions or managing accounts.

## Run the web app

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Other web-development commands:

```sh
npm run typecheck
npm run build
npm run preview
```

The Android wrapper is in `android/`. Web development and preview commands are for reviewing the web app, not a substitute for checking the native wrapper.

## Personalize

Most application code is under `src/`; the `theme/` area holds visual tokens and global styling. Use those existing theme files when adjusting the app's appearance, and inspect the relevant screen files under `src/` before changing visible copy. The root `index.html` references `/favicon.svg`; preserve that root-relative path if you keep the existing favicon, or update the reference if you change its location.

For app identity or native-wrapper settings, review `capacitor.config.ts` and the relevant files under `android/` before making project-specific changes. Avoid changing configuration based on assumptions about settings not documented here.

## Manual review checklist

These are actions to perform, not verified results:

- [ ] Start the web app with `npm run dev` and open the local address it prints.
- [ ] Check that the `/favicon.svg` reference resolves, and inspect any image or media paths involved in your changes.
- [ ] Try the foundation screen's platform and engine status display and any visible controls. Do not infer finance workflows from this foundation screen.
- [ ] Inspect the web layout at narrow and wide viewport widths, checking that status information and controls remain readable.
- [ ] For changes involving native behavior or configuration, review the Android wrapper in an appropriate native development environment; web review alone does not cover it.

No review results are recorded here. `npm run typecheck`, `npm run build`, and `npm run preview` are available project commands, but running them does not replace the manual review checklist.