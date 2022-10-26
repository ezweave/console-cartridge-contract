import {
  stringifyAllValuesInObject,
  stringifyValue,
} from './stringifyAllValuesInObject';

describe(stringifyValue, () => {
  it('stringifies a value', () => {
    expect(stringifyValue(42)).toEqual('42');
  });
  it('stringifies a simple object', () => {
    expect(
      stringifyValue({
        name: 'Homer',
        age: 42,
      }),
    ).toEqual({
      name: 'Homer',
      age: '42',
    });
  });
  it('stringifies an object with an array', () => {
    expect(
      stringifyValue({
        name: 'Homer',
        age: 42,
        favoriteNumbers: [420, 69, 311],
      }),
    ).toEqual({
      name: 'Homer',
      age: '42',
      favoriteNumbers: ['420', '69', '311'],
    });
  });
  it('stringifies an object with complex, non-homogenous array', () => {
    expect(
      stringifyValue({
        name: 'Homer',
        age: 42,
        things: [
          {
            name: 'Bart',
            age: 10,
          },
          311,
        ],
      }),
    ).toEqual({
      name: 'Homer',
      age: '42',
      things: [
        {
          name: 'Bart',
          age: '10',
        },
        '311',
      ],
    });
  });
});

describe(stringifyAllValuesInObject, () => {
  it('stringifies all values in an object', () => {
    expect(
      stringifyAllValuesInObject({
        firstname: 'han',
        lastname: 'solo',
        age: 999,
        likes: [false, true],
      }),
    ).toEqual({
      firstname: 'han',
      lastname: 'solo',
      age: '999',
      likes: ['false', 'true'],
    });
  });
});
