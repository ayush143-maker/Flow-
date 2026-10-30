# Flow-

Flow is a local-first personal-finance app foundation for Android, built with React, TypeScript, Vite, and Capacitor. The current project focuses on the web-to-native connection and a foundation screen that reports platform and engine status. It also includes theme tokens, app identity, native bridge interfaces, and local preference storage support. The README does not describe finance workflows such as tracking transactions or managing accounts.

## Run the web app

Install dependencies and start the Vite development server:

    npm install
    npm run dev

Useful web-development commands:

    npm run typecheck
    npm run build
    npm run preview

The Android wrapper is in `android/`; the README does not document a native build or deployment procedure or a web-hosting setup. The web development and preview commands are for reviewing the web app, not a substitute for checking the native wrapper.

## Code organization and review

Most application code is under `src/`. The `services/native/` area contains the native bridge and web fallback, while `theme/` holds visual tokens and global styling. The `android/` directory contains the native wrapper. The root `index.html` and Vite and Capacitor configuration files support the web-to-native project setup.

After changing application code, review the web app through the development server and run `npm run typecheck` and `npm run build`. Use `npm run preview` to review the production build locally. Keep the web fallback aligned with changes to bridge behaviour. If a command is unavailable, check that dependencies were installed from the repository root.