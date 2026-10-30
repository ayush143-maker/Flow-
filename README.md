# Flow-

**Flow** is a local-first personal-finance app foundation for Android, built with React, TypeScript, Vite, and Capacitor. The current project focuses on the connection between the web interface and its native Android layer, with a small foundation screen that reports platform and engine status.

The codebase includes theme tokens, app identity, native bridge interfaces, and Capacitor integration. Its package also includes local preference storage support, keeping the project oriented toward on-device data rather than requiring a remote service for the basic foundation.

## Run the web app

Install dependencies and start the Vite development server:

    npm install
    npm run dev

Useful checks for web development are:

    npm run typecheck
    npm run build

npm run preview serves the built web bundle locally.

## Code organization

Most application code lives under src/. The services/native/ area contains the native bridge and web fallback, while theme/ keeps visual tokens and global styling together. The android/ directory contains the native wrapper. When changing bridge behaviour, keep the web fallback aligned and avoid displaying a native-connected state unless the native plugin actually responds.
