import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  name: '',
  budget: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || emptyState;
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({name: value});
  };

  handleChangeBudget = (event) => {
    const { value } = event.target;
    this.setState({budget: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type='submit'> Create Section </button>

      </form>
    );
  }
}

CategoryForm.propTypes = {
  section: PropTypes.object,
  onComplete : PropTypes.func,
};

export default CategoryForm;
