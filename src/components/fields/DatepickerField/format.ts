import { Datepicker } from "vanillajs-datepicker";

export const format = (date: Date) => {
  // return Datepicker.formatDate(date, "yyyy-mm-dd");
  return formatWithTimezone(date, "Europe/Kiev");
};

export const formatWithTimezone = (date: Date, timezone: string) => {
  const formatter = new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: timezone,
  });
  const formattedDate = formatter.format(date);
  return formattedDate;
};
