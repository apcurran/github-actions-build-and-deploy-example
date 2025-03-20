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
