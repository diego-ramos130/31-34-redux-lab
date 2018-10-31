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
    this.state.isHidden = true;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({name: value});
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.props.onDelete(this.state);
  };
  handleUpdate = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.state);
    this.setState({
      isHidden: !this.state.isHidden
    })
  };
  handleUpdateMenu = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  };

  render() {
    return (
      <div>
      <h2> { this.props.category.name } </h2>
        <p> { this.props.category.budget } </p>
      <button onClick={this.handleDelete}> Delete </button>
        <button onClick={this.handleUpdateMenu.bind(this)}> Edit </button>
        {!this.state.isHidden &&
        <React.Fragment>
          <form
            onSubmit={this.handleUpdate}>
            <input
              type='text'
              name='title'
              placeholder='title'
              defaultValue={this.state.name}
              onChange={this.handleChange}
            />
            <button type='submit'> Update Section </button>
          </form>
        </React.Fragment>
        }
      </div>
    )
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default CategoryItem;
