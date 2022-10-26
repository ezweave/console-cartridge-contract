import { flow, get } from 'lodash';
import { unfuxml } from 'unfuxml';

import { PetShopInventoryItem } from '../../types/data';
export interface TransformOffersOperationResponse {
  (string): PetShopInventoryItem[];
}

export const getProductsFromResponse = (obj: any) =>
  get<PetShopInventoryItem[]>(obj, 'products', []);

export const transformOffersOperationResponse: TransformOffersOperationResponse =
  flow(unfuxml, getProductsFromResponse);
