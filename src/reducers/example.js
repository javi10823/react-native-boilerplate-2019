import { TYPE_EXAMPLE } from '../actions/types';

const initialState = {
  isFetching: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE_EXAMPLE:
      return Object.assign({}, state, { isFetching: false });
    default:
      return state;
  }
};
