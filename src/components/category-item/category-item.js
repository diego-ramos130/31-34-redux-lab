import React from 'react';
import PropTypes from 'prop-types';
import CategoryForm from "../category-form/category-form";


const emptyState = {
  name: '',
  budget: 0,
};

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;
  }

  render() {
    return (
      <h2>{this.props.category.budget}</h2>
      <h2>{this.props.category.name}</h2>
    );
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
};

export default CategoryItem;
