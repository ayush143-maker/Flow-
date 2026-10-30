# Flow

Flow is an Android personal-finance app foundation built with React, TypeScript, Vite, and Capacitor. Its current focus is the web-to-native connection and a foundation screen that reports platform and engine status. The project also includes theme tokens, app identity, native bridge interfaces, and local preference storage support. This README does not describe finance workflows such as transaction tracking or account management.

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

## Project structure and references

Most application code is under `src/`; the `theme/` area contains visual tokens and global styling. Review the relevant screen files under `src/` before changing visible copy. The root `index.html` references `/src/main.tsx` and `/favicon.svg`. Preserve these root-relative paths or update them if files move, and check how they resolve if the app is served below a domain root.

For app identity or native-wrapper settings, review `capacitor.config.ts` and relevant files under `android/`. The root file list does not include an `.env.example`, and this README does not define environment variables or backend settings. Do not add undocumented configuration or put credentials in tracked files. Values included in a web or native client should be treated as visible to users. Local preference storage support does not establish that financial records or other sensitive data are stored.

## Package scripts

The following commands are declared in `package.json`; their presence does not indicate that they have been run:

| Command | Purpose |
|---|---|
| `npm run icons` | Runs the icon-generation script. |
| `npm run cap:sync` | Builds the web app and synchronizes the Android Capacitor project. |
| `npm run android:debug` | Synchronizes the Android project and runs the Gradle debug assembly. |

## Key files

- `src/` — application source code.
- `android/` — Android project.
- `scripts/` — project scripts.
- `capacitor.config.ts` — Capacitor configuration.
- `package.json` — dependencies and declared scripts.
- `index.html` — web entry page.