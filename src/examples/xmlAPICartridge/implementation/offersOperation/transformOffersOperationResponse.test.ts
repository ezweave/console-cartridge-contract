import { PET_SHOP_OFFERS_RESPONSE } from './__fixtures__/PET_SHOP_OFFERS_RESPONSE';
import { transformOffersOperationResponse } from './transformOffersOperationResponse';

describe(transformOffersOperationResponse, () => {
  it('transforms a response', () => {
    expect(transformOffersOperationResponse(PET_SHOP_OFFERS_RESPONSE)).toEqual([
      {
        sku: 'PET-BB-PUR-01',
        name: 'Dog Toy',
        price: 10,
        description: 'Dog Chew Toy',
      },
      {
        sku: 'PET-BB-PUR-02',
        name: 'Cat Toy',
        price: 15,
        description: 'Mouse Toy With Feathers',
      },
      {
        sku: 'PET-BB-PUR-03',
        name: 'Guinea Pig Toy',
        price: 20,
        description: 'Chew Toy For Guinea Pigs',
      },
    ]);
  });
});
