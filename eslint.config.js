import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  globalIgnores([
    "node_modules/*",
    "dist/*"
  ])
]);

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
// ];