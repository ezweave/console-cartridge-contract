import { PetShopCategory } from '../../types/data';

// TODO: make this have a concrete return type or interface type
interface GetRequestTransformer<InputType> {
  (input: InputType): string;
}

export const transformOffersOperationRequest: GetRequestTransformer<
  PetShopCategory
> = (category) => `products.xml?category=${category}`; // Can also use MDN URL and searchParams https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
