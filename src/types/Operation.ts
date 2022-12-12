import { Retriever } from './Retriever';
import { Transformer } from './Transformer';

interface IOWithoutTransformation<InputType, OutputType> {
  operation: Retriever<InputType, OutputType>;
}

interface IOWithTransformation<InputType, OutputType, RequestType, ResponseType>
  extends IOWithoutTransformation<RequestType, ResponseType> {
  transform?: {
    request: Transformer<InputType, RequestType>;
    response: Transformer<ResponseType, OutputType>;
  };
}

// type IO<InputType, OutputType, RequestType = void, ResponseType = void> =
//   | IOWithTransformation<InputType, OutputType, RequestType, ResponseType>
//   | IOWithoutTransformation<InputType, OutputType>;
interface BaseOperation {
  name: string;
}

export interface OneStepOperation<
  InputType,
  RequestType,
  ResponseType,
  OutputType,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType, OutputType, RequestType, ResponseType>,
  ];
}

export interface TwoStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
  ];
}

export interface ThreeStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
  ];
}

export interface FourStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
  ];
}

export interface FiveStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
  ];
}
export interface SixStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
  RequestType6,
  ResponseType6,
  OutputType6,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
  ];
}
export interface SevenStepOperation<
  InputType1,
  RequestType1,
  ResponseType1,
  OutputType1,
  RequestType2,
  ResponseType2,
  OutputType2,
  RequestType3,
  ResponseType3,
  OutputType3,
  RequestType4,
  ResponseType4,
  OutputType4,
  RequestType5,
  ResponseType5,
  OutputType5,
  RequestType6,
  ResponseType6,
  OutputType6,
  RequestType7,
  ResponseType7,
  OutputType7,
> extends BaseOperation {
  steps: [
    IOWithTransformation<InputType1, OutputType1, RequestType1, ResponseType1>,
    IOWithTransformation<OutputType1, OutputType2, RequestType2, ResponseType2>,
    IOWithTransformation<OutputType2, OutputType3, RequestType3, ResponseType3>,
    IOWithTransformation<OutputType3, OutputType4, RequestType4, ResponseType4>,
    IOWithTransformation<OutputType4, OutputType5, RequestType5, ResponseType5>,
    IOWithTransformation<OutputType5, OutputType6, RequestType6, ResponseType6>,
    IOWithTransformation<OutputType6, OutputType7, RequestType7, ResponseType7>,
  ];
}

export interface Operation<InputType, OutputType> extends BaseOperation {
  steps: // [
  //   IOWithTransformation<InputType, any, any, any>,
  //   ...IOWithTransformation<any, any, any, any>[],
  //   IOWithTransformation<any, OutputType, any, any>,
  // ]
  | [
        IOWithTransformation<InputType, any, any, any>,
        IOWithTransformation<any, OutputType, any, any>,
      ]
    | [IOWithTransformation<InputType, OutputType, any, any>];
}
