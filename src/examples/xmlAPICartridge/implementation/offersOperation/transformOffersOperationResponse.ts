import { flow } from 'lodash';
import { unfuxml } from 'unfuxml';
import { get as getFP } from 'lodash/fp';

import { PetShopInventoryItem } from '../../types/data';
export interface TransformOffersOperationResponse {
  (string): PetShopInventoryItem[];
}

export const transformOffersOperationResponse: TransformOffersOperationResponse =
  flow(
    unfuxml,
    getFP('products', []),
  );
