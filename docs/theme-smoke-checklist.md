# Theme smoke checklist

Use this checklist after changing theme tokens, global CSS, or status-bar handling.

- Load the web preview using npm run dev and confirm the root fills the viewport.
- Check the default light appearance and the system dark appearance.
- Check the explicit data-theme dark override if a caller sets it.
- Inspect body text, secondary text, dividers, cards, and overlays in both themes.
- Confirm the logo keeps a readable silhouette against each background.
- On an available native test installation, change the system theme while the app is open and check that the status bar updates.
- Confirm no horizontal overflow appears at narrow phone widths.
- Confirm the web preview does not display a successful native-engine state.

This is a manual check only; it does not trigger a build or create an APK.