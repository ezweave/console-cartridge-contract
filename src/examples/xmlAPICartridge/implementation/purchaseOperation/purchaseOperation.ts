import { httpPost } from '@console-cartridge-contract/util/io';

import { transformOffersOperationRequest } from './transformOffersOperationRequest';
import { transformOffersOperationResponse } from './transformOffersOperationResponse';

import { PurchaseOperation } from '../../types/operations';
import { mockarooHTTPClient } from '../io';

export const purchaseOperation: PurchaseOperation = {
  name: 'PurchaseOperation',
  steps: [
    {
      operation: httpPost(mockarooHTTPClient),
      transform: {
        request: transformOffersOperationRequest,
        response: transformOffersOperationResponse,
      },
    },
  ],
};