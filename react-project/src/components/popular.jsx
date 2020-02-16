import React, { Component } from "react";

class Popular extends Component {
  state = {
    index: 3,
    images: [
      { id: 0, picURL: "https://www.picsum.photos/300?random=1" },
      { id: 1, picURL: "https://www.picsum.photos/300?random=2" }
    ]
  };

  handleNewImages = () => {
    const images = [...this.state.images];
    const url = "https://www.picsum.photos/300?random=";
    let index = this.state.index + 1;
    images.map(image => {
      image.picURL = url + index;
      index = index + 1;
      return image;
    });

    this.setState({ images, index });
  };
  render() {
    return (
      <div className="right-bar ml-auto project-border-radius p-3">
        <div className="project-color-main project-border-radius w-100 text-center m-auto p-2 project-shadow">
          <h4> Most popular </h4>
        </div>
        <button
          className="btn-primary m-2 project-border-radius w-25 float-right mt-2 "
          onClick={this.handleNewImages}
        >
          New
        </button>
        <section>
          {this.state.images.map(pic => (
            <img
              className="pop-picture"
              key={pic.id}
              src={pic.picURL}
              alt="popular"
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Popular;
