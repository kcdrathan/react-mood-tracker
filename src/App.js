import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      timeline: [],
    };
  }

  handlechange = (e) =>
    this.setState({
      timeline: [
        ...this.state.timeline,
        { id: e.target.id, value: e.target.value, date: Date.now() },
      ],
    });

  render() {
    const { timeline } = this.state;

    console.log(timeline);

    return (
      <div className="App">
        <h1 className="title">How are you feeling right now?</h1>
        <p>Click on an EMOJI to track your mood</p>
        <div>
          <button key="1" value="emoji1" onClick={this.handlechange}>
            emoji1
          </button>
          <button key="2" value="emoji2" onClick={this.handlechange}>
            emoji2
          </button>
          <button key="3" value="emoji3" onClick={this.handlechange}>
            emoji3
          </button>
          <button key="4" value="emoji4" onClick={this.handlechange}>
            emoji4
          </button>
          <button key="5" value="emoji5" onClick={this.handlechange}>
            emoji5
          </button>
          <button key="6" value="emoji6" onClick={this.handlechange}>
            emoji6
          </button>
        </div>
        <div className="list">
          {this.state.timeline.map((times) => (
            <p>
              {times.value} {new Date(times.date).toLocaleString()}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
