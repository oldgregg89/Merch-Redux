import merchReducer from '../../reducers/merch-reducer';

describe('mechReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchReducer({}, { type: null })).toEqual({});
  });
});

export default (state = {}, action) => {

};