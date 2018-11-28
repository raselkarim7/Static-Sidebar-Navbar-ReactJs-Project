import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; /* comment or remove this line if you don't use redux-form */

const rootReducer = combineReducers({
  form: formReducer,/* comment or remove this line also, if you don't use redux-form */
});

export default rootReducer;
