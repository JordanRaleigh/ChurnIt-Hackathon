import axios from 'axios';

const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/categories');
    dispatch(setCategories(data));
  } catch (error) {
    console.log('error in fetchCategories', error);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}
