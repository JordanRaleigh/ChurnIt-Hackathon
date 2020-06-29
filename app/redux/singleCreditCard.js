import axios from 'axios';

const SET_CREDITCARD = 'SET_CREDITCARD';

export const setCreditCard = (creditCard) => ({
  type: SET_CREDITCARD,
  creditCard,
});

export const fetchCreditCard = (creditCardId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/creditcards/${creditCardId}`);
    dispatch(setCreditCard(data));
  } catch (error) {
    console.log('error in fetchCreditCard');
  }
};

const singleCreditCard = (state = [], action) => {
  switch (action.type) {
    case SET_CREDITCARD:
      return action.creditCard;
    default:
      return state;
  }
};

export default singleCreditCard;
