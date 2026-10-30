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

## Asset and loading review checklist

These are review actions, not verified results or performance measurements:

- [ ] Verify that the root-relative `/favicon.svg` reference resolves to the intended file when running the web app. Inspect other image, audio, video, and font references in `src/` and confirm their local paths.
- [ ] Check whether assets in the source tree and `android/` wrapper are still used before removing them; trace references in source, styles, and native configuration.
- [ ] Review unusually large images or other media in relation to their displayed or played role. Consider a suitable size or encoding where appropriate, then inspect the result.
- [ ] Inspect external font, script, and other remote-resource references in the web app and native configuration. Confirm each is intentional and needed, and consider the experience if a resource is unavailable.
- [ ] After changes, review asset loading in the web app and, when native assets or behavior are involved, in the Android wrapper as well.

## Manual review checklist

These are actions to perform, not verified results:

- [ ] Start the web app with `npm run dev` and open the local address it prints.
- [ ] Check that the `/favicon.svg` reference resolves, and inspect any image or media paths involved in your changes.
- [ ] Try the foundation screen's platform and engine status display and any visible controls. Do not infer finance workflows from this foundation screen.
- [ ] Inspect the web layout at narrow and wide viewport widths, checking that status information and controls remain readable.
- [ ] For changes involving native behavior or configuration, review the Android wrapper in an appropriate native development environment; web review alone does not cover it.

## Accessibility review checklist

These are future checks to perform on the web screen and, where relevant, the Android wrapper; they are not compliance claims or verified results:

- [ ] Use Tab and Shift+Tab in the web app to reach the platform and engine status screen's interactive controls, if present. Check keyboard order and operation; review native controls with a hardware keyboard where supported.
- [ ] Confirm focused web controls have a visible focus indicator. For native-wrapper changes, check the corresponding platform focus treatment where applicable.
- [ ] Check that any controls have meaningful accessible names and that platform and engine status text is understandable to assistive technology; do not infer behavior beyond the foundation screen.
- [ ] Review text, status indicators, and control contrast against the app theme, including narrow viewports and any states shown by the screen.
- [ ] If meaningful images are present or added, check that they have appropriate text alternatives; identify decorative imagery as decorative.
- [ ] If transitions or other motion are present or added, check how the web app responds to reduced-motion preferences and review native behavior on the target platform.

No review results are recorded here. `npm run typecheck`, `npm run build`, and `npm run preview` are available project commands, but running them does not replace the manual review checklist.