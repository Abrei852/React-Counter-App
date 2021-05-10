import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Counters rendered");
        const { onDelete, onIncrement } = this.props;
        return (
            <div>
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;

//The component that owns a piece of the state, should be the one modifying it.
//Counters finns i denna state och då ska modifiering t.ex delete ske här
