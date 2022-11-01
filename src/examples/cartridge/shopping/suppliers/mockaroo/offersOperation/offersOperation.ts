import { OffersOperation } from '@console-cartridge-contract/examples/cartridge/shopping/types/operations';
import { httpGet } from '@console-cartridge-contract/util/io';

import { transformOffersOperationRequest } from './transformOffersOperationRequest';
import { transformOffersOperationResponse } from './transformOffersOperationResponse';

import { mockarooHTTPClient } from '../io';

export const offersOperation: OffersOperation = {
  name: 'OffersOperation',
  steps: [
    {
      operation: httpGet(mockarooHTTPClient),
      transform: {
        request: transformOffersOperationRequest,
        response: transformOffersOperationResponse,
      },
    },
  ],
};
