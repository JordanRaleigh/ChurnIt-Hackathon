import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCreditCard } from '../redux/singleCreditCard';
import CreditCardPerks from './CreditCardPerks';

export class SingleCreditCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.props.fetchCreditCard(this.props.match.params.creditCardId);
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const { creditCard } = this.props;
    const { isLoaded } = this.state;
    console.log(creditCard);
    return (
      <div>
        {isLoaded && creditCard.length ? (
          <div>
            {creditCard.map((perk) => (
              <CreditCardPerks key={perk.id} perk={perk} />
            ))}
          </div>
        ) : (
          <p>Not Loaded</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  creditCard: state.singleCreditCard,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCreditCard: (creditCardId) => dispatch(fetchCreditCard(creditCardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCreditCard);
