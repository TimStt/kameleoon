import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";
import { IQueryParamsDTO } from "@entities/test/api/types";

export type TSortKeysByAlphabet = keyof Omit<
  INormilizeDataTests,
  "status" | "id"
>;

export const sortKeysByAlphabet: TSortKeysByAlphabet[] = [
  "name",
  "type",
  "site",
];

export const sortedStatuses = {
  asc: ["ONLINE", "PAUSED", "STOPPED", "DRAFT"],
  desc: ["DRAFT", "STOPPED", "PAUSED", "ONLINE"],
} as const;
