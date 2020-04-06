import React from "react";

class CopyButton extends React.Component {
  handleCopy = () => {
    this.copyToClipboard(this.props.url);
  };

  copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render() {
    return (
      <button
        type="button"
        className="button is-small is-white"
        onClick={this.handleCopy}
      >
        Copy
      </button>
    );
  }
}
export default CopyButton;
