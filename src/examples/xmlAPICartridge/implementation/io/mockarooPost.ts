import { mockarooHTTPClient } from './mockarooHTTPClient';

export const mockarooPost = (relativePath: string, data: string) =>
  mockarooHTTPClient.post<string>(relativePath, data);
