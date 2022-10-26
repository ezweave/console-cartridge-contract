import { clone, isArray, isObject, map, reduce, set, toString } from 'lodash';

export const stringifyValue = (value: any) => {
  if (isArray(value)) {
    return map(value, stringifyValue);
  }
  if (isObject(value)) {
    return stringifyAllValuesInObject(value);
  }
  return toString(value);
};

export const stringifyAllValuesInObject = <T extends object>(obj: object) =>
  reduce(
    obj,
    (newObj, value, key) => {
      const copyOfNewObj = clone(newObj);
      const stringifiedValue = stringifyValue(value);
      set(copyOfNewObj, key, stringifiedValue);
      return copyOfNewObj;
    },
    {},
  ) as T;
