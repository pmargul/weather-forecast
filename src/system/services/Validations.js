import Translations from "../settings/Translations";

export const required = (value,) =>
  value || typeof value === "number" ? undefined : Translations.fieldRequired;

export const integer = (value) =>
  `${value}`.replace(/ /g, "").match(/^([0-9])?[0-9]+$/g) || value === undefined
    ? undefined
    : Translations.passInteger;

export const number = (value) =>
    `${value}`.replace(/ /g, "").match(/^([0-9]+[,.])?[0-9]+$/g) && value !=null
      ? undefined
      : Translations.passNumber;

export const maxLength50 = (value="") =>
  value.toString().length < 50
    ? undefined
    : Translations.max50;
