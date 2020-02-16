import React, { Component } from "react";

class Post extends Component {
  state = {
    time: ""
  };

  componentDidMount() {
    this.setState({ time: this.props.when(this.props.post.date) });

    if (this.props.getTime(this.props.post.date) < 60) {
      this.interval = setInterval(
        () => this.setState({ time: this.props.when(this.props.post.date) }),
        60000 // one minute
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="post">
        <span className="nick"> {this.props.post.nick} </span>
        <section>
          <span> {this.props.post.content} </span>
          <span className="time"> {this.state.time} </span>
        </section>
      </div>
    );
  }
}

export default Post;
