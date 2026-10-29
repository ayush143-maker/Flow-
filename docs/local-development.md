# Local development

The project requires Node.js 20 or newer, as declared in package.json.

Useful commands:
- npm run dev starts the Vite development server.
- npm run typecheck checks the TypeScript project without emitting files.
- npm run build checks TypeScript and creates the web distribution bundle.
- npm run preview serves the already-created web bundle locally.

Use typecheck for quick source verification. Preview is useful for checking the built web bundle, while dev is best for normal iteration.

No GitHub Actions workflow is required for these local checks. Avoid adding workflow files as part of routine source or documentation maintenance.