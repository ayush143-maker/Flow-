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

Most application code is under `src/`; the `theme/` area holds visual tokens and global styling. Use those existing theme files when adjusting appearance, and inspect the relevant screen files under `src/` before changing visible copy. The root `index.html` references `/favicon.svg`; preserve that root-relative path if you keep the existing favicon, or update the reference if you change its location.

For app identity or native-wrapper settings, review `capacitor.config.ts` and relevant files under `android/` before making project-specific changes. Avoid changing configuration based on assumptions about settings not documented here.

## Configuration and data handling

The listed root files do not include an `.env.example`; this README does not define environment variables, backend settings, or service credentials. Do not invent configuration values. Review `capacitor.config.ts` and the Android files for their existing roles before changing them. Keep real credentials and private data out of tracked source and configuration; if you add a template, use placeholders only.

Flow includes local preference storage support, but this README does not establish that it stores financial records or other sensitive data. Treat values stored on a device as user data, not as a secure secret store. Do not use real financial or personal information in test content. Any values included in the web bundle or packaged client should be considered visible to users; do not embed private keys, passwords, or privileged credentials there. If a credential is committed accidentally, remove or replace it and rotate it where applicable; removing it from the latest revision alone may not clear repository history.

## Browser, platform, and asset review checklist

These are review actions, not verified results or performance measurements. No compatibility testing is recorded here.

- [ ] Start the web app with `npm run dev` and review it in current browsers relevant to its web stack. Record browser and version for issues. Review the Android wrapper separately for native changes; browser results do not establish WebView or native compatibility.
- [ ] Inspect the browser Console and Network panel for errors, failed requests, and unexpected warnings. Use the appropriate Android development-environment diagnostics for native-only problems.
- [ ] Verify that the root-relative `/favicon.svg` reference resolves from the intended web root. Inspect image, audio, video, and font references in `src/` and confirm each local path matches a file. Check the intended deployed path too if the app is hosted beneath a URL subpath.
- [ ] Verify remote resource URLs and consider the experience if a resource is unavailable. Trace references in source, styles, and native configuration before removing assets from the source tree or `android/` wrapper.
- [ ] Compare narrow mobile-sized and desktop-sized web viewports, checking status information and controls. For native changes, also review relevant layouts in the Android wrapper.
- [ ] Try the foundation screen's platform and engine status display and any visible controls. Do not infer finance workflows from this screen.
- [ ] Before committing, inspect changed configuration and data-handling code for credentials or real personal information. Treat values bundled into web or native clients as visible to users.

## Accessibility review checklist

These are future checks for the web screen and, where relevant, the Android wrapper; they are not compliance claims or verified results:

- [ ] Use Tab and Shift+Tab in the web app to reach interactive controls, if present. Check keyboard order, operation, and visible focus; review native controls with a hardware keyboard where supported.
- [ ] Check meaningful accessible names and that platform and engine status text is understandable to assistive technology.
- [ ] Review text, status indicators, and control contrast. Check text alternatives for meaningful images and reduced-motion behavior if motion is present.

No review results are recorded here. `npm run typecheck`, `npm run build`, and `npm run preview` are project commands, but running them does not replace the manual browser or platform review.