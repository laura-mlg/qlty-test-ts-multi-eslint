# qlty-test-ts-multi-eslint

TypeScript monorepo with two packages requiring separate eslint configurations:

- `packages/ui/` — React components (uses `eslint-plugin-react`, JSX rules)
- `packages/api/` — Node.js API (uses `eslint-plugin-import`, strict type-checking rules, no React)

Each package has its own `.eslintrc.js` with different plugins and rules.
