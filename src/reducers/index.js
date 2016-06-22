import { combineReducers } from 'redux';
import Test from './post';
import { reducer as formTest} from 'redux-form';

const Root = combineReducers({
  post: Test,
  form: formTest
});

export default Root;
