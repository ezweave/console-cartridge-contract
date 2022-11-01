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
      operation: (string) => Promise<string>;
      transform: {
        request: (...n) => string;
        response: (string) => PetShopPurchaseResponse;
      };
    },
  ];
}
