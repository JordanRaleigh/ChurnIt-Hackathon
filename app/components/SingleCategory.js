import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../redux/singleCategory';
import { NavLink } from 'react-router-dom';

export class SingleCategory extends Component {
  componentDidMount() {
    // debugger;
    this.props.fetchCategory(this.props.match.params.categoryId);
  }
  // componentDidUpdate() {
  //   this.props.fetchCategory(this.props.match.params.categoryId);
  // }
  compare(a, b) {
    if (a.points > b.points) {
      return -1;
    }
    if (a.points < b.points) {
      return 1;
    }
    return 0;
  }

  render() {
    console.log(this.props);
    if (!this.props.category[0]) {
      return (
        <div className="md:flex shadow-lg  mx-6 md:mx-auto my-10 max-w-lg md:max-w-1 h-64">
          <h1>No Credit Cards Have Perks In This Category</h1>
        </div>
      );
    }
    const { category } = this.props;
    const sorted = category.sort(this.compare);
    console.log(sorted);
    return (
      <div>
        {sorted.map((creditCard) => (
          <div
            className="md:flex shadow-lg  mx-6 md:mx-auto my-10 max-w-lg md:max-w-1"
            key={creditCard.creditCardId}
          >
            <h1 className="text-gray-800 font-medium mr-auto">
              <NavLink to={`/creditcards/${creditCard.creditCardId}`}>
                {creditCard.creditCard.issuer} {creditCard.creditCard.card}
              </NavLink>
            </h1>
            <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {creditCard.points} Points
            </h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.singleCategory,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);
