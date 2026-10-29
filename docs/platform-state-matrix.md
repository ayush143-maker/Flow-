# Platform state matrix

| Runtime | Platform label | Engine response | Expected status |
| --- | --- | --- | --- |
| Browser preview | Web preview | Web fallback reports native=false | Not running natively |
| Native Android with responding plugin | Android | Plugin reports native=true | Connected with reported version |
| Native Android with rejected bridge call | Android | No usable engine info | Unavailable |

The platform label and engine status describe different things. Capacitor.getPlatform() identifies the runtime platform, while the bridge result determines whether the native engine responded. Keep those concepts separate when changing status copy or tests.

A browser preview should remain usable even when native functionality is unavailable.