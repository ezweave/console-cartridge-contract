export interface Retriever<I, O> {
  (inputType: I): Promise<O>
}
