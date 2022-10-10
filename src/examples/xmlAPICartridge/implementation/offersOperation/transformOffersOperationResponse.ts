import { flow } from 'lodash';
import { unfuxml } from 'unfuxml';

import { PetShopPurchaseResponse } from '../../types/data';

export interface TransformOffersOperationResponse {
  (string): PetShopPurchaseResponse;
}

export const transformOffersOperationResponse: TransformOffersOperationResponse =
  flow(unfuxml, (_xml) => ({} as PetShopPurchaseResponse));
