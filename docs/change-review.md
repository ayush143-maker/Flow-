# Change review guidance

For foundation-level changes, prefer the smallest change that proves one behavior.

- Keep native-only APIs behind the existing Capacitor boundary.
- Update TypeScript and CSS token definitions together when they represent the same design value.
- Keep async effects cancellable and remove event listeners during cleanup.
- Treat browser and Android behavior as separate verification targets.
- Do not add credentials, personal transaction information, or local data exports to source control.
- Do not add GitHub Actions workflows or APK-producing automation as part of routine maintenance.
- Describe checks that were actually run; do not claim a successful build from static inspection alone.

A narrow change is easier to review and safer to revert.