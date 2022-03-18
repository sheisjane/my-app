import React, { Component } from "react";

class EventExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dice: 1
        };

        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        const num = Math.ceil(Math.random() *6);
        console.log('this is:',this);
        this.setState({ dice: num});
    }

    rollDice2 = () => {
        const num = Math.ceil(Math.random() *6);
        console.log('this is:',this);
        this.setState({ dice: num});
    }

    rollDice3() {
        const num = Math.ceil(Math.random() *6);
        console.log('this is:',this);
        this.setState({ dice: num});
    }

render(){
    return (
        <div className="center">
            <h1>Event Examples</h1>
            <p>{this.state.dice}</p>
            <button onClick={this.rollDice}>Roll dice</button>
            <button onClick={this.rollDice2}>Roll dice2</button>
            <button onClick={() => this.rollDice3()}>Roll dice3</button>
        </div>
    )
}
}
export default EventExample;