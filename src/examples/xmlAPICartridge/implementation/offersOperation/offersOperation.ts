import { transformOffersOperationRequest } from './transformOffersOperationRequest';
import { transformOffersOperationResponse } from './transformOffersOperationResponse';

import { PurchaseOperation } from '../../types/operations/PurchaseOperation';
import { mockarooGet } from '../io';

export const offersOperation: PurchaseOperation = {
  name: 'PurchaseOperation',
  steps: [
    {
      operation: (_n) => mockarooGet('relative/path'),
      transform: {
        request: transformOffersOperationRequest,
        response: transformOffersOperationResponse,
      },
    },
  ],
};
