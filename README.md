# Flow

Flow is an Android personal-finance app foundation built with React, TypeScript, Vite, and Capacitor. The current entrypoint identifies the screen as Phase 1 and presents branding, platform, native-engine status, data, and build rows. It explicitly says the interface, on-device database, and SMS engine are planned for later phases; this is not evidence of transaction tracking, account management, or a working finance workflow.

## Run the web app

The package manifest specifies Node.js `>=20`. From the project directory, install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Other web commands are:

```sh
npm run typecheck
npm run build
npm run preview
```

These commands are for web development and preview; they do not replace checking the Android wrapper in `android/`.

## Platform status and native behavior

On mount, the screen calls `getEngineInfo()` and displays a checking, unavailable, connected-with-version, or not-running-natively status. Its platform row distinguishes Android from Web preview. On Android, the app uses Capacitor and a native status-bar plugin to update status-bar style and background color when the system color scheme changes. The entrypoint shows no user controls or external requests, and its status display does not establish a backend or completed data storage.

## Project structure and references

Most application code is under `src/`; review the relevant screen files before changing visible copy. The root `index.html` references `/src/main.tsx` and `/favicon.svg`. Preserve these root-relative paths or update them if files move, and check how they resolve if served below a domain root. For app identity or native-wrapper settings, review `capacitor.config.ts` and relevant files under `android/`.

The root file list does not include an `.env.example`, and this README does not define environment variables or backend settings. Do not add undocumented configuration or put credentials in tracked files. Local preference-storage support does not establish that financial records or other sensitive data are stored.

## Package scripts

- `npm run icons` — runs the icon-generation script.
- `npm run cap:sync` — builds the web app and synchronizes the Android Capacitor project.
- `npm run android:debug` — synchronizes the Android project and runs the Gradle debug assembly.