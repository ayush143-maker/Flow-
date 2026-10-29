# Foundation quality checks

Run the existing non-packaging checks before merging foundation changes:

    npm run typecheck
    npm run build

The build script produces the web bundle and runs TypeScript checking; it is not an Android APK workflow.

Manual review:
1. Confirm the logo has meaningful alternative text.
2. Check that the primary heading and status section remain understandable to assistive technology.
3. Confirm the checking state appears during a delayed engine response.
4. Confirm a rejected engine request produces the unavailable state.
5. Open the browser preview and ensure the screen does not claim native functionality.
6. Switch system appearance and inspect foreground/background contrast.
7. Confirm no new network service or remote data dependency was introduced.

Record actual failures rather than assuming the checklist passed.