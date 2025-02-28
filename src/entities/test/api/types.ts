import { Undefinedable } from "@shared/libs/utility-types";

export interface ITestDTO {
  id: number;
  name: string;
  type: ETypesTests;
  status: EStatusTests;
  siteId: number;
}

export enum ETypesTests {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum EStatusTests {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface ISiteDTO {
  id: number;
  url: string;
}

export interface IQueryParamsDTO {
  query: string;
  page: number;
  limit: number;
}

export type IQueryParamsTestDTO = Undefinedable<IQueryParamsDTO>;

export interface IFullInfoTestsDTO {
  tests: ITestDTO[];
  sites: ISiteDTO[];
}
