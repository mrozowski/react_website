import React, { Component } from "react";
import Post from "../post_section/post";

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        nick: "Szymon",
        content: "Your post",
        date: new Date(),
        time: "0 sec ago"
      }
    ]
  };

  showDate = date => {
    console.log("wywolano showDate()");
    const timeD = this.getTimeDifference(date); //secounds
    let temp = "";

    if (timeD < 60 * 60 * 24) {
      //less than a day
      const minutes = Math.floor(timeD / 60); //minutes
      if (minutes < 1) temp = timeD + " sec ago";
      else if (minutes < 60) temp = minutes + " min ago";
      else if (minutes >= 60 && minutes < 120) temp = "1 hour ago";
      else if (minutes < 60 * 24)
        temp = Math.floor(minutes / 60) + " hours ago";
    } else {
      //a day and more
      const days = Math.floor((timeD / 60) * 60 * 24);
      if (days === 1) temp = "1 day ago";
      else if (days < 7) temp = days + " days ago";
      else if (days === 7) temp = "1 week ago";
      else temp = date.toLocaleDateString();
    }

    return temp;
  };

  getTimeDifference = date => {
    console.log("wywolano getTimedif");
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    return seconds;
  };

  render() {
    return (
      <div className="ml-3">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} when={this.showDate} />
        ))}
      </div>
    );
  }
}

export default Posts;
