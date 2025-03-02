import { ITestDTO } from "src/entities/test/api";
import { IFullInfoTestsDTO } from "./types";
import { regCleanUrl } from "@features/tests/search/constants";

export interface INormilizeDataTests extends Omit<ITestDTO, "siteId"> {
  site?: string;
}

export const normilizeDataTests = (
  datas: IFullInfoTestsDTO | undefined
): INormilizeDataTests[] | undefined => {
  return datas?.tests?.map((test) => {
    const site = datas.sites?.find((site) => +site.id === test.siteId);

    return {
      ...test,
      site: site ? site.url.replace(regCleanUrl, "$3") : "",
    };
  });
};
