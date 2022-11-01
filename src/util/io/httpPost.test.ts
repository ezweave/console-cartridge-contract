import { AxiosInstance } from 'axios';

import { httpPost } from './httpPost';

describe(httpPost, () => {
  it('returns data from a response', async () => {
    const path = '/some/path';
    const data = { foo: 'bar' };
    const mockClient = {
      post: jest.fn().mockResolvedValue({ data }),
    } as unknown as AxiosInstance;
    const post = httpPost(mockClient);

    expect(await post(path, JSON.stringify(data))).toEqual(data);
  });
});
