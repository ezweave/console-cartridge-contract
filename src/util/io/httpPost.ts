import { AxiosInstance } from 'axios';

export const httpPost =
  (client: AxiosInstance) => async (relativePath: string, data: string) => {
    const response = await client.post<string>(relativePath, data);
    return response.data;
  };
