import axios from 'axios';

const SET_CATEGORY = 'SET_CATEGORY';

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const fetchCategory = (categoryId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/categories/${categoryId}`);
    dispatch(setCategory(data));
  } catch (error) {
    console.log('error in fetchCategory');
  }
};

const singleCategory = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default singleCategory;
