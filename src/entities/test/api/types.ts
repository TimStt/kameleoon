import { Undefinedable } from "@shared/libs/utility-types";

export interface ITestDTO {
  id: number;
  name: string;
  type: ETypesTests;
  status: TStatusTests;
  siteId: number;
}

export enum ETypesTests {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export type TStatusTests = "DRAFT" | "ONLINE" | "PAUSED" | "STOPPED";

export enum EPathTests {
  DRAFT = "FINALIZE",
  ONLINE = "RESULT",
  PAUSED = "RESULT",
  STOPPED = "RESULT",
}

export interface ISiteDTO {
  id: string;
  url: string;
}

export type TSort = "asc" | "desc";

export interface ISortedParamsDTO {
  name: TSort;
  type: TSort;
  site: TSort;
  status: TSort;
}

export type ISortedParamsTestDTO = Undefinedable<ISortedParamsDTO>;

export interface IFullInfoTestsDTO {
  tests: ITestDTO[];
  sites: ISiteDTO[];
}
