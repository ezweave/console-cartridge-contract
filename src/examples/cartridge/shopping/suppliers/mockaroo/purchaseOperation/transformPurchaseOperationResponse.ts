import { flow, get } from 'lodash';
import { unfuxml } from 'unfuxml';

import { PetShopPurchaseResponse } from '@console-cartridge-contract/examples/cartridge/shopping/types/data';

import { stringifyAllValuesInObject } from '../util';
export interface TransformOffersOperationResponse {
  (string): PetShopPurchaseResponse;
}

export const getPetShopPurchaseResponseData = (
  resp: any,
): PetShopPurchaseResponse =>
  stringifyAllValuesInObject<PetShopPurchaseResponse>({
    id: get(resp, 'purchase.traceId'),
    xId: get(resp, 'purchase.id'),
    total: get(resp, 'purchase.tax') + get(resp, 'purchase.total'),
  });

export const transformPurchaseOperationResponse: TransformOffersOperationResponse =
  flow(unfuxml, getPetShopPurchaseResponseData);
