import { PET_SHOP_PURCHASE_RESPONSE } from './__fixtures__/PET_SHOP_PURCHASE_RESPONSE';
import PET_SHOP_PURCHASE_RESPONSE_JSON from './__fixtures__/PET_SHOP_PURCHASE_RESPONSE.json';
import {
  getPetShopPurchaseResponseData,
  transformPurchaseOperationResponse,
} from './transformPurchaseOperationResponse';

import { PetShopPurchaseResponse } from '../../../types/data';

const petShopPurchaseOperationResponse: PetShopPurchaseResponse = {
  id: 'our-trace-id',
  total: '2026.72',
  xId: '1234',
};

describe(getPetShopPurchaseResponseData, () => {
  it('converts json from the pet shop to our response shape', () => {
    expect(
      getPetShopPurchaseResponseData(PET_SHOP_PURCHASE_RESPONSE_JSON),
    ).toEqual(petShopPurchaseOperationResponse);
  });
});

describe(transformPurchaseOperationResponse, () => {
  it('should transform the repsonse to a JS object', () => {
    expect(
      transformPurchaseOperationResponse(PET_SHOP_PURCHASE_RESPONSE),
    ).toEqual(petShopPurchaseOperationResponse);
  });
});
