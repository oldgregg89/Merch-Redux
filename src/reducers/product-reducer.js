export default (state = {}, action) => {
  const { names, price, id } = action;
  switch (action.type) {
  case 'ADD_PRODUCT':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        price: price,
        id: id
      }
    });
  default:
    return state;
  }
};


