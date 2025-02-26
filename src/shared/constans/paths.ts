export const PATH_DASHBOARD = "/dashboard";
export const PATH_RESULT = "/results/:idTest";
export const PATH_FINALIZE = "/finalize/:idTest";

export const PATH_DYNAMIC_TEST = (idTest: string) => ({
  RESULT: `/results/${idTest}`,
  FINALIZE: `/finalize/${idTest}`,
});
