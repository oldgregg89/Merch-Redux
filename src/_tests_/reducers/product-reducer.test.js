import productReducer from '../../reducers/product-reducer';

describe('productReducer', () => {

  let action;
  const productData = {
    names: 'hobo cloths',
    price: '4.50',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new mech data to ProductList', () => {
    const { names, price, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      names: names,
      price: price,
      id: id
    };

    expect(ProductListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        price: price,
        id: id
      }
    });
  });
});

