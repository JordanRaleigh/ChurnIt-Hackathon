import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/categories';
import CategoryList from './CategoryList';
// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCategories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      <div>
        <CategoryList categories={categories} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapState, mapDispatch)(AllCategories);
