import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // "out" e a saida da exportacao estatica e "docs" guarda o ambiente
    // da auditoria: nenhum dos dois e codigo-fonte. Passaram a precisar de
    // exclusao explicita porque o Next 16 removeu o comando "next lint",
    // que filtrava esses diretorios sozinho.
    ignores: ["node_modules", ".next", "out", "dist", "public", "docs"],
  },
];

export default eslintConfig;
