import { Operation } from '@console-cartridge-contract/types';

import { PetShopPurchaseRequest, PetShopPurchaseResponse } from '../data';

export interface PurchaseOperation
  extends Operation<
    PetShopPurchaseRequest,
    string,
    string,
    PetShopPurchaseResponse
  > {
  name: 'PurchaseOperation';
  steps: [
    {
      operation: (n) => Promise<string>;
      transform: {
        request: (n) => string;
        response: (n) => PetShopPurchaseResponse;
      };
    },
  ];
}
