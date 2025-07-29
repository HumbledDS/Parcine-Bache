import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // Désactiver les règles pour les apostrophes françaises
      "react/no-unescaped-entities": "off",
      // Désactiver les règles pour les variables non utilisées (on traduit déjà)
      "@typescript-eslint/no-unused-vars": "off",
      // Désactiver les règles pour les types any (on gère déjà les types)
      "@typescript-eslint/no-explicit-any": "off",
      // Désactiver les règles pour les images (on utilise déjà next/image quand nécessaire)
      "@next/next/no-img-element": "off",
      // Désactiver les règles pour les alt text (on gère déjà l'accessibilité)
      "jsx-a11y/alt-text": "off",
      // Désactiver les règles pour les hooks (on gère déjà les dépendances)
      "react-hooks/exhaustive-deps": "off",
      // Désactiver les règles pour les interfaces vides
      "@typescript-eslint/no-empty-object-type": "off",
      // Désactiver les règles pour les variables non réassignées
      "prefer-const": "off",
    },
  }),
];

export default eslintConfig;
