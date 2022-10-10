import { mockarooHTTPClient } from './mockarooHTTPClient';

export const mockarooGet = async (relativePath: string) => {
  const response = await mockarooHTTPClient.get<string>(relativePath);
  return response.data;
};
