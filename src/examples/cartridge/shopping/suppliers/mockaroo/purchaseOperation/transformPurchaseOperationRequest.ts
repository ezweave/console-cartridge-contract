import { join, map } from 'lodash';

import {
  PetShopPurchaseItem,
  PetShopPurchaseRequest,
} from '@console-cartridge-contract/examples/cartridge/shopping/types/data';

export const generateProductPurchaseElementFromItem = ({
  quantity,
  item,
}: PetShopPurchaseItem) =>
  `<product>
  <sku>${item.sku}</sku>
  <quantity>${quantity}</quantity>
</product>`;

export const transformPurchaseOperationRequest = ({
  id,
  items,
}: PetShopPurchaseRequest) =>
  `
<?xml version='1.0' encoding='UTF-8'?>
<purchase>
  <id>${id}</id>
  <products>
    ${join(map(items, generateProductPurchaseElementFromItem), '\n')}
  </products>
</purchase>
`;
