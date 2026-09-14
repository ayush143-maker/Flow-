# database/ (TS side)

SQLite is owned by the native FlowCore plugin (Kotlin) — see docs/ARCHITECTURE.md.
From Phase 3 this folder holds TypeScript repositories and query types that call
FlowCore over the Capacitor bridge: paged transaction queries, summaries,
category CRUD and merchant-rule CRUD.
