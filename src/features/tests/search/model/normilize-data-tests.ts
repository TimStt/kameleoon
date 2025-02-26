import { ISiteDTO } from "src/entities/test/api";

import { ITestDTO } from "src/entities/test/api";

export interface INormilizeDataTests extends Omit<ITestDTO, "siteId"> {
  site?: string;
}

export const normilizeDataTests = ({
  tests,
  sites,
}: {
  tests?: ITestDTO[];
  sites?: ISiteDTO[];
}): INormilizeDataTests[] | undefined => {
  return tests?.map((test) => {
    const site = sites?.find((site) => site.id === test.siteId);
    return { ...test, site: site?.url };
  });
};
