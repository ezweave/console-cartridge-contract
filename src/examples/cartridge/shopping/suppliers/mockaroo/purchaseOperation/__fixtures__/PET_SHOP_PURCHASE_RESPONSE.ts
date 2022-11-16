import { map, reduce } from 'lodash';

import { PetShopInventoryItem } from '@console-cartridge-contract/examples/cartridge/shopping/types/data';

import { dogTuxedoFixture, fancyCatCollarFixture } from '.';

const buildProductFromItem =
  (quantity: number) =>
  ({ name, sku, price }: PetShopInventoryItem) =>
    `<product>
  <name>${name}</name>
  <sku>${sku}</sku>
  <price>${price}</price>
  <quantity>${quantity}</quantity>
</product>
`;

const testProducts = [fancyCatCollarFixture, dogTuxedoFixture];

const taxPercentage = 0.06;

const calculateTotal = (products: PetShopInventoryItem[]) =>
  reduce(
    products,
    (total: number, { price }: PetShopInventoryItem) => total + parseInt(price),
    0,
  );

const total = calculateTotal(testProducts);
const tax = total * taxPercentage;

export const PET_SHOP_PURCHASE_RESPONSE = `
<?xml version='1.0' encoding='UTF-8'?>
<purchase>
  <products>
    ${map(testProducts, buildProductFromItem(1))}
  </products>
  <tax>${tax}</tax>
  <total>${total}</total>
  <id>1234</id>
  <traceId>our-trace-id</traceId>
</purchase>
`;
