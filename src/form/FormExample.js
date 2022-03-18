import React, {Component } from "react";

class FormExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      Comment: "",
      favouriteFruit: "",
      hobbies: [],
    };
  }

  handleUsernameChange = (event) => {
    const username = event.target.value;

    if (/^[A-Za-z]*$/.test(username)) {
      this.setState({ username });
    }
  };

  handleUsernameChange = (event) => {
    this.setState({ Comment: event.target.value });
  };

  handleFavourFruitChange = (event) => {
    this.setState({ favouriteFruit: event.target.value });
  };

  handleHobbyChange = (event) => {
    console.log(`event.target.value: `, event.target.checked);
    debugger;

    if (event.target.name === "watchMovie") {
      if (event.target.checked) {
        if (!this.state.hobbies.includes("watchMovie")) {
          this.setState({ hobbies: [...this.state.hobbies, "watchMovie"] });
        }
      } else {
        if (this.state.hobbies.includes("watchMovie")) {
          this.setState({
            hobbies: this.state.hobbies.filter(
              (hobby) => hobby !== "watchMovie"
            ),
          });
        }
      }
      this.setState({ hobby: event.target.checked });
    }
  };

  render() {
    const fruies = [
      "grapefruit",
      "lime",
      "coconut",
      "mango",
      "watermalon",
      "peach",
    ];

    return (
      <div className="center">
        <h2>Form Examples</h2>
        <form action="/login">
          <div>
            <label>username: </label>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Please input your username"
              name="username"
              size="30"
            />
          </div>

          <div>
            <lable>Comment: </lable>
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </div>

          <div>
            <lable>Favourite fruit: </lable>
            <select
              name="favFruit"
              value={this.state.favouriteFruit}
              onChange={this.handleFavourFruitChange}
            >
              <option></option>
              {fruies.map((fruit) => (
                <option key={fruit} value={fruit}>
                  {fruit}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>hobbies: </label>

            <input
              id="readBook"
              name="readBook"
              type="checkbox"
              onChange={this.handleHobbyChange}
            />
            <label for="readBook">Read Books</label>
            <input
              id="watchMovie"
              name="watchMovie"
              type="checkbox"
              onChange={this.handleHobbyChange}
            />
            <label for="watchMovie">Watch Movie</label>
            <input
              id="playGames"
              name="playGames"
              type="checkbox"
              onChange={this.handleHobbyChange}
            />
            <label for="playGames">Play Games</label>
          </div>

          <hr />
          <button onClick>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormExample;
