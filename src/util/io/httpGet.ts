import { AxiosInstance } from 'axios';

export const httpGet =
  (client: AxiosInstance) => async (relativePath: string) => {
    const response = await client.get<string>(relativePath);
    return response.data;
  };
