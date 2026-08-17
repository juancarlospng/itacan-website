import { copy as de } from "./de";
import { fr } from "./fr";
import { it } from "./it";
import { en } from "./en";
import { es } from "./es";

const merge = (base, override) => {
  if (Array.isArray(override)) return override;
  if (!override || typeof override !== "object") return override ?? base;
  return Object.fromEntries(
    Object.keys(base).map((key) => [key, key in override ? merge(base[key], override[key]) : base[key]])
  );
};

const dictionaries = { de, fr: merge(de, fr), it: merge(de, it), es: merge(de, es), en: merge(de, en) };

export let copy = de;

export const activateCopy = (language) => {
  copy = dictionaries[language] || de;
};

