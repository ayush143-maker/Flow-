# parser/ (TS side)

The transaction parsing engine itself is implemented in Kotlin inside the
FlowCore native plugin (android/app/src/main/java/com/flow/finance/core/…)
so it can run during SMS/notification ingestion without bridge round-trips.

From Phase 4 this folder holds:
- `fixtures.ts` — the realistic Indian bank/PSP message corpus used by the
  Developer Tools “Parser Test” screen.
- Shared types for parse results.

Kotlin unit tests keep their own copy of the corpus; the two must stay aligned.
