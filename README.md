# Flow

Flow is an Android personal-finance app foundation built with React, TypeScript, Vite, and Capacitor. The current project focuses on the web-to-native connection and a foundation screen that reports platform and engine status. It also includes theme tokens, app identity, native bridge interfaces, and local preference storage support. The README does not describe finance workflows such as tracking transactions or managing accounts.

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

The Android wrapper is in `android/`. The web development and preview commands are for reviewing the web app, not a substitute for checking the native wrapper.

## Personalize and review

Most application code is under `src/`; the `theme/` area holds visual tokens and global styling. Use those existing theme files when adjusting the app's appearance, and inspect the relevant screen files under `src/` before changing visible copy. The root `index.html` references `/favicon.svg`; preserve that root-relative path if you keep the existing favicon, or update the reference if you change its location.

For app identity or native-wrapper settings, review `capacitor.config.ts` and the relevant files under `android/` before making project-specific changes. Avoid changing configuration based on assumptions about settings not documented here. After changes, review the web app through the development server and run `npm run typecheck` and `npm run build`; use `npm run preview` to review the production build locally.