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

## Code organization

Most application code is under `src/`. The `services/native/` area contains the native bridge and web fallback, while `theme/` holds visual tokens and global styling. The `android/` directory contains the native wrapper. The root `index.html` and Vite and Capacitor configuration files support the web-to-native project setup. Keep the web fallback aligned with changes to bridge behaviour.