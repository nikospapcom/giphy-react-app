import React from "react";
import "bulma/css/bulma.css";
import Header from "./Header";
import ImagesList from "./ImagesList";
import AlertMessage from "./AlertMessage";

import giphy from "../api/giphy";

const API_KEY = "wr5D0gYRPsyDHRh7BeUYAZPaEX0Rrqnk";

class App extends React.Component {
  state = {
    images: [],
    noData: false,
  };
  handleSubmit = async (term) => {
    const response = await giphy.get("/search", {
      params: {
        q: term,
        api_key: API_KEY,
        limit: 8,
      },
    });
    if (response.data.data.length) {
      this.setState({
        images: response.data.data,
        noData: false,
      });
    } else {
      this.setState({
        images: [],
        noData: true,
      });
    }
  };

  handleClear = () => {
    this.setState({
      images: [],
      noData: false,
    });
  };

  handleDeleteImage = (props) => {
    let updatedImages = this.state.images.filter((image) => image.id !== props);
    this.setState({ images: updatedImages });
  };

  render() {
    return (
      <div className="container">
        <Header
          handleFormSubmit={this.handleSubmit}
          handleClearData={this.handleClear}
        />
        <div className="body">
          <div className="container">
            {!this.state.noData ? (
              <ImagesList
                images={this.state.images}
                handleDeleteImage={this.handleDeleteImage}
              />
            ) : (
              <AlertMessage text="No results found" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
