import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-action';
import CategoryForm from "../category-form/category-form";
import CategoryItem from "../category-item/category-item";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <CategoryForm onComplete={this.props.categoryCreate}/>
        { this.props.categories.map(currentCategory =>
          <categoryItem category={currentCategory}/>)}
      </div>
    ); // 12 & 13 = category items.
  }
}

Dashboard.propTypes = {
  categoryCreate: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      dispatch(categoryActions.create(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
