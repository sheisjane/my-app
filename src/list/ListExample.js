import React, { Component } from "react";

class ListExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                'Watch movie',
                'Have dinner',
                'Play game',
            ]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todo.map((todo,index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListExample;