import React from "react";
import logo from "../logo.svg";

class Header extends React.Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  handleClear = (event) => {
    this.props.handleClearData();
  };

  render() {
    return (
      <div className="header has-text-centered">
        <img src={logo} className="logo" alt="logo" />

        <div className="form-area">
          <form onSubmit={this.handleSubmit}>
            <div className="field has-addons has-addons-centered">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  name="image-search"
                  type="text"
                  value={this.state.term}
                  className="input"
                />
              </div>
              <div className="control">
                <button className="button is-info">Search</button>
              </div>
            </div>
          </form>
          <button className="button is-danger" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
export default Header;
