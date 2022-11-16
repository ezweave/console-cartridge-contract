import { PurchaseOperation } from '@console-cartridge-contract/examples/cartridge/shopping/types/operations';
import { httpPost } from '@console-cartridge-contract/util/io';

import { transformPurchaseOperationRequest } from './transformPurchaseOperationRequest';
import { transformPurchaseOperationResponse } from './transformPurchaseOperationResponse';

import { mockarooHTTPClient } from '../io';

export const purchaseOperation: PurchaseOperation = {
  name: 'PurchaseOperation',
  steps: [
    {
      operation: (data: string) =>
        httpPost(mockarooHTTPClient)('/purchase', data),
      transform: {
        request: transformPurchaseOperationRequest,
        response: transformPurchaseOperationResponse,
      },
    },
  ],
};
