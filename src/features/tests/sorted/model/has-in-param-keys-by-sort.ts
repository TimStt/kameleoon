export const hasInParamKeysBySort = <
  ObjectParams extends Record<string, string>
>(
  params: ObjectParams,
  keysList: string[]
) => {
  return keysList.some((key) => params[key]);
};
