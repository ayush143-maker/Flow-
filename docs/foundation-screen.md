# Foundation screen

The root App component is intentionally a foundation screen, not the full finance experience. It demonstrates the React/Vite bundle, brand assets, theme handling, safe-area layout, and the Capacitor native bridge.

## Engine state

- checking: the bridge request is in flight.
- ready: getEngineInfo() returned a value; the UI still checks info.native before claiming native connectivity.
- unavailable: the bridge request rejected.

The effect uses a cancellation flag so a late promise settlement does not update state after unmount. A loaded web bundle is not proof that the Kotlin plugin is running.

## Status bar

On a native platform, the app listens for the system dark-mode preference and applies a matching status-bar style and background. The listener is removed on cleanup. When changing this behavior, test both initial preference and a live preference change.

Keep foundation-only behavior separate from future finance features. New work should not imply that native storage or parsing is ready before the bridge reports it.