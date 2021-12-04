import { combineReducers } from 'redux';

import imageRotatorReducer from './imageRotatorReducer';

const rootReducer = combineReducers({
  imageRotator: imageRotatorReducer,
});

export default rootReducer;
