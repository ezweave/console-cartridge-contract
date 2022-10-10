export interface Transformer<T, O> {
  (inputType: T): O;
}
