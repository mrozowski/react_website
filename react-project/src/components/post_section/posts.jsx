import React, { Component } from "react";
import Post from "../post_section/post";
import "../post_section/style.css";

class Posts extends Component {
  state = {
    nick: "Szymon",
    value: "",
    index: 1,
    posts: [
      {
        id: 1,
        nick: "Szymon",
        content: "Your post",
        date: new Date(),
        time: ""
      },
      {
        id: 2,
        nick: "Szymon",
        content: "Your post two",
        date: new Date("2020-02-15"),
        time: ""
      },
      {
        id: 3,
        nick: "Szymon",
        content: "Your post three",
        date: new Date("2020-02-12"),
        time: ""
      }
    ]
  };

  componentDidMount() {
    const postsSort = [...this.state.posts].sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });

    const index = this.state.posts.length;
    this.setState({ posts: postsSort, index });
  }
  showDate = date => {
    const timeD = this.getTimeDifference(date); //minutes
    let temp = "";

    if (timeD < 60 * 24) {
      //less than a day
      if (timeD < 1) temp = "now";
      //less then minute
      else if (timeD < 60) temp = timeD + " min ago";
      else if (timeD >= 60 && timeD < 120) temp = "1 hour ago";
      else if (timeD < 60 * 24) temp = Math.floor(timeD / 60) + " hours ago";
    } else {
      //a day and more
      const days = Math.floor(timeD / (60 * 24));
      if (days === 1) temp = "1 day ago";
      else if (days < 7) temp = days + " days ago";
      else if (days === 7) temp = "1 week ago";
      else temp = date.toLocaleDateString();
    }

    return temp;
  };

  getTimeDifference = date => {
    const minutes = Math.floor(
      (new Date().getTime() - date.getTime()) / (1000 * 60)
    );
    return Math.abs(minutes);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    if (!(this.state.value === "")) {
      let posts = [...this.state.posts];
      const index = this.state.index + 1;
      const newPost = {
        id: index,
        nick: this.state.nick,
        content: this.state.value,
        date: new Date()
      };
      posts.push(newPost);
      this.setState({ posts: posts, index: index, value: "" });
    }
  };

  render() {
    return (
      <div className="ml-3 posts">
        <section className="submit-post project-color-main project-border-radius">
          <label form="Post">Share your toughts</label>
          <div className="d-flex">
            <textarea
              className="type-post"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />

            <input
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
              className="btn btn-primary btn-sm m-2 project-border-radius submit-button project-shadow"
            />
          </div>
        </section>
        {this.state.posts
          .map(post => (
            <Post
              key={post.id}
              post={post}
              when={this.showDate}
              getTime={this.getTimeDifference}
            />
          ))
          .reverse()}
      </div>
    );
  }
}

export default Posts;
