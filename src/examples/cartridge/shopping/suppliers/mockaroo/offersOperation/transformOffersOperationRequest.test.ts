import { transformOffersOperationRequest } from './transformOffersOperationRequest';

describe(transformOffersOperationRequest, () => {
  it('creates a proper relative url for a get request', () => {
    expect(transformOffersOperationRequest('toys')).toEqual(
      'products.xml?category=toys',
    );
  });
});
