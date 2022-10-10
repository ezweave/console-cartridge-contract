export interface TransformerWithoutTracing<T, O> {
  (inputType: T): O;
}
export interface TransformerWithTracing<T, O> {
  (id: string): TransformerWithoutTracing<T, O>; // TODO: is this the best approach here?
}

export type Transformer<T, O> =
  | TransformerWithoutTracing<T, O>
  | TransformerWithTracing<T, O>;
