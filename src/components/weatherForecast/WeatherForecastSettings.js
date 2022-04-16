import Translations from "../../../system/settings/Translations";

export const ForecastTableColumns = (lang) => [
  {
    label: Translations.number[lang],
    key: "number",
  },
  {
    label: Translations.name[lang],
    key: "name",
  },
  {
    label: Translations.priority[lang],
    key: "priority",
    select: TaskPriorities(lang),
  },
  {
    label: Translations.creationDate[lang],
    key: "creationDate",
    datetime: true,
  },
  {
    label: Translations.term[lang],
    key: "term",
    datetime: true,
  },
  {
    label: Translations.realized[lang],
    key: "realized",
    boolean: true,
  },
];

