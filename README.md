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

## Project files

Most application code is under `src/`; the `theme/` area holds visual tokens and global styling. Review the relevant screen files under `src/` before changing visible copy. The root `index.html` references `/src/main.tsx` and `/favicon.svg`; preserve these root-relative paths or update the references if their locations change.

For app identity or native-wrapper settings, review `capacitor.config.ts` and relevant files under `android/` before editing. The listed root files do not include an `.env.example`, and this README does not define environment variables or backend settings. Do not add undocumented configuration or place credentials in tracked files. Values included in a web or native client should be treated as visible to users. Local preference storage support does not establish that financial records or other sensitive data are stored.

## Contributor handoff

Keep changes focused and preserve filenames and relative references, or update every affected reference when necessary. In your handoff, summarize what changed and identify the relevant files, noting whether the change affects the web screen, configuration, or Android wrapper. Before publishing, manually review the web page and any relevant native changes, then inspect the final changes for unintended edits or private information. This is a review checklist, not a record of completed checks.
