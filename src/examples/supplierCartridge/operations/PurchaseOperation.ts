import { Operation } from '@console-cartridge-contract/types'

export interface PurchaseOperation extends Operation<object, string, string, object> {
  name: 'PurchaseOperation',
  steps: [{
    operation: (n) => Promise<string>,
    transform: {
      request: (n) => string,
      response: (n) => object,
    }
  }]
}
