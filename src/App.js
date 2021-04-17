import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import CustomTimeline from "../src/components/timeline/timeline";

// const redis = require("redis");
// const redis_url =
//   "redis://:p37696b19ff016360ad2a299e549a6764259df6ddab5ec8a49832021a76f5424d@ec2-34-238-57-227.compute-1.amazonaws.com:8790";

const redis_url = "redis://localhost:6379";
// const client = redis.createClient();

// client.on("error", function (error) {
//   console.error(error);
// });

// client.on("connect", function (err) {
//   client.set("name", "kcdrathan");
//   console.log(client.get("name"));
// });

// client.set("key", "value", redis.print);
// client.get("key", redis.print);

// const Redis = require("ioredis");
// const redis = new Redis(redis_url);

// redis.set("name", "kcdrathan").then((ok) => {
//   redis.get("name").then((res) => console.log(res));
// });

export default class App extends Component {
  constructor() {
    super();

    document.cookie = document.cookie === "" ? uuidv4() : document.cookie;
    this.state = {
      sessionId: document.cookie,
      timeline: [],
    };
  }

  handlechange = (e, v) =>
    this.setState({
      timeline: [
        ...this.state.timeline,
        { id: e.target.id, value: v, time: Date.now() },
      ],
    });

  render() {
    const { timeline, sessionId } = this.state;

    console.log(timeline);

    return (
      <div className="App">
        <h1 className="title">How are you feeling right now?</h1>
        <p>Click on an EMOJI to track your mood</p>
        <div className="emoji-list">
          <div className="emoji-container">
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f601/32.webp`}
              value="1f601"
              onClick={(e) => this.handlechange(e, "1f601")}
            />
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f911/32.webp`}
              value="1f911"
              onClick={(e) => this.handlechange(e, "1f911")}
            />
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f62e_200d_1f4a8/32.webp`}
              value="1f62e_200d_1f4a8"
              onClick={(e) => this.handlechange(e, "1f1f62e_200d_1f4a8")}
            />
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f914/32.webp`}
              value="1f914"
              onClick={(e) => this.handlechange(e, "1f914")}
            />
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f97a/32.webp`}
              value="1f97a"
              onClick={(e) => this.handlechange(e, "1f97a")}
            />
            <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/1f60d/32.webp`}
              value="1f60d"
              onClick={(e) => this.handlechange(e, "1f60d")}
            />
          </div>
        </div>
        <CustomTimeline timeline={this.state.timeline} />
      </div>
    );
  }
}
