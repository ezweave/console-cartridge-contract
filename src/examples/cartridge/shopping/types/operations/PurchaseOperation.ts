import { Operation } from '@console-cartridge-contract/types';

import { PetShopPurchaseRequest, PetShopPurchaseResponse } from '../data';

export interface PurchaseOperation
  extends Operation<PetShopPurchaseRequest, PetShopPurchaseResponse> {
  name: 'PurchaseOperation';
  steps: [
    {
      operation: (string) => Promise<string>;
      transform: {
        request: (request: PetShopPurchaseRequest) => string;
        response: (response: string) => PetShopPurchaseResponse;
      };
    },
  ];
}
