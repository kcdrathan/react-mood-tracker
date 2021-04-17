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
      moods: ["1f601", "1f911", "1f62e_200d_1f4a8", "1f914", "1f97a", "1f60d"]
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
            {this.state.moods.map(mood => (
              <img
              alt="emoji"
              src={`https://emojiapi.dev/api/v1/${mood}/32.webp`}
              value={mood}
              onClick={(e) => this.handlechange(e, mood)}
            />
            ))}
          </div>
        </div>
        <CustomTimeline timeline={this.state.timeline} />
      </div>
    );
  }
}
