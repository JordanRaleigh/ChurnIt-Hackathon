import { combineReducers } from 'redux';
import categories from './categories';
import singleCategory from './singleCategory';
import singleCreditCard from './singleCreditCard';

const appReducer = combineReducers({
  categories,
  singleCategory,
  singleCreditCard,
});

export default appReducer;
