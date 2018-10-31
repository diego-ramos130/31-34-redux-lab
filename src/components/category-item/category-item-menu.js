import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  name: '',
  budget: 0,
};

class CategoryMenu extends React.Component {
  constructor(props) {
  super(props);
  this.state = this.props.category || emptyState;
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({name: value});
  };
  handleChangeBudget = (event) => {
    const { value } = event.target;
    this.setState({budget: value});
  };
  render() {
    return (

    )
  }
}

CategoryMenu.propTypes = {
  category: PropTypes.object,
  onUpdate: PropTypes.func,
};

export default CategoryMenu;
