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
        <CategoryItem category={currentCategory} onDelete={this.props.categoryRemove} onUpdate={this.props.categoryUpdate}/>)}
      </div>
    );
  }
}

Dashboard.propTypes = {
  categoryCreate: PropTypes.func,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
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
    categoryRemove: (category) => {
      dispatch(categoryActions.remove(category));
    },
    categoryUpdate: (category) => {
      dispatch(categoryActions.update(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
