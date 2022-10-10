import { Operation } from '@console-cartridge-contract/types';

import { PetShopInventoryItem } from '../data';

export interface OffersOperation
  extends Operation<any, string, string, PetShopInventoryItem> {
  name: 'OffersOperation';
  steps: [
    {
      operation: (string) => Promise<string>;
      transform: {
        request: () => string;
        response: (n) => PetShopInventoryItem;
      };
    },
  ];
}
