import { AxiosInstance } from 'axios';

import { httpGet } from './httpGet';

describe(httpGet, () => {
  it('returns data from a response', async () => {
    const path = '/some/path';
    const data = { foo: 'bar' };
    const mockClient = {
      get: jest.fn().mockResolvedValue({ data }),
    } as unknown as AxiosInstance;
    const get = httpGet(mockClient);

    expect(await get(path)).toEqual(data);
  });
});
