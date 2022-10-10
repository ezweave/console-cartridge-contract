import { httpGet } from '@console-cartridge-contract/util/io';

import { transformOffersOperationRequest } from './transformOffersOperationRequest';
import { transformOffersOperationResponse } from './transformOffersOperationResponse';

import { OffersOperation } from '../../types/operations';
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
