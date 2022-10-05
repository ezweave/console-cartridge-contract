import { Retriever } from './Retriever';
import { Transformer } from './Transformer';

interface IOWithoutTransformation<
  InputType,
  OutputType,
> {
  operation: Retriever<InputType, OutputType>,
}

interface IOWithTransformation<
  InputType,
  OutputType,
  RequestType,
  ResponseType
> extends IOWithoutTransformation<RequestType, ResponseType> {
  transform: {
    request: Transformer<InputType, RequestType>,
    response: Transformer<ResponseType, OutputType>
  },
}

type IO<
  InputType,
  OutputType,
  RequestType = void,
  ResponseType = void
> = IOWithTransformation<InputType, OutputType, RequestType, ResponseType> | IOWithoutTransformation<InputType, OutputType>

export interface Operation<
  InputType,
  RequestType,
  ResponseType,
  OutputType
> {
  name: String,
  steps: IO<InputType, OutputType, RequestType, ResponseType>[],
}
