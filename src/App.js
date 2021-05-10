import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    //Is called once when an instance of an class is rendered
    //We can set the state directly
    //För att använda props måste vi lägga in det som en paramenter (props)
	//Går inte att använda setState({ })
    constructor() {
        super();
        console.log("hej");
    }

	//Anropas efter vår komponent är renderad i vår DOM
	//Perfekt för att använda ajax calls från vår server
	//Går att använda setState({ })
	//Alla children är rendered
    componentDidMount() {
        //Ajax calls
        console.log("app mounted");
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    //Parent skickar en metod till child
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(
            (counter) => counter.id !== counterId
        );
        this.setState({ counters });
    };
    render() {
        console.log("app rendered");
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(
                            (counter) => counter.value > 0
                        ).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
