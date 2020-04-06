import React from "react";

class DeleteButton extends React.Component {
  handleDelete = () => {
    this.props.handleDeleteImage(this.props.id);
  };

  render() {
    return (
      <button
        type="button"
        className="button is-small is-white"
        onClick={this.handleDelete}
      >
        Delete
      </button>
    );
  }
}
export default DeleteButton;
