export const formatURLSearchParams = (data: any) => {
  const modifiedData: Record<string, string> = {};

  Object.keys(data).forEach((key: string) => {
    modifiedData[key] = data[key];
  });

  return modifiedData;
};
