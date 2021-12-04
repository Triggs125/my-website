import * as actions from '../actions/imageRotatorActions';

export const initialState = {
  imagesShowing: [],
}

export default function imageRotatorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_IMAGES:
      return { ...state, imagesShowing: action.payload.imagesShowing };
    default:
      return state;
  }
}