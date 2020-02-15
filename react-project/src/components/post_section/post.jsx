import React, { Component } from "react";

class Post extends Component {
  state = {
    time: "0 sec ago"
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.props.when(this.props.post.date) }),
      1000 * 60
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <span> {this.props.post.nick}</span>
        <section>
          <span> {this.props.post.content} </span>
          <span>{this.state.time}</span>
        </section>
      </div>
    );
  }
}

export default Post;
