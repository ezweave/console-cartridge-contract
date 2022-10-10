import { PetShopInventoryItem } from "./PetShopInventoryItem";

// TODO: do we want to call this "request" or "input", etc to avoid confusion with the real IO?
export interface PetShopPurchaseRequest {
  id: string,
  items: PetShopPurchaseItem[],
}

export interface PetShopPurchaseItem {
  quantity: number,
  item: PetShopInventoryItem,
}