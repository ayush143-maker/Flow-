# Native bridge contract

The native integration is split between the native interface module and the web implementation in src/services/native/flow-core-web.ts.

The web implementation returns native=false, platform=web, and a placeholder version. That response is deliberate: the UI can distinguish a browser preview from a real native runtime rather than masking a missing plugin.

Safe expectations:
- Treat bridge calls as asynchronous and fallible.
- Present an unavailable state when a bridge call rejects.
- Never infer native connectivity solely from Capacitor.isNativePlatform().
- Keep the interface and web fallback aligned whenever a native method is added.
- Do not present a placeholder version as a production engine version.

This contract allows the web preview to remain useful without pretending Android-only capabilities exist.