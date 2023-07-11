import * as fns from "date-fns";
export function formatISOToReadable(dateISOString, args: string) {
  return dateISOString ? fns.format(new Date(dateISOString), args) : "No Data";
}
