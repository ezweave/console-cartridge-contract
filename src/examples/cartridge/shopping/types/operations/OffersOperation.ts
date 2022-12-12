import { Operation } from '@console-cartridge-contract/types';

import { PetShopCategory, PetShopInventoryItem } from '../data';

export interface OffersOperation
  extends Operation<PetShopCategory, PetShopInventoryItem[]> {
  name: 'OffersOperation';
  steps: [
    {
      operation: (transformedRequest: string) => Promise<string>;
      transform: {
        request: (request: PetShopCategory) => string;
        response: (response: string) => PetShopInventoryItem[];
      };
    },
  ];
}
