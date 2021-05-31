import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
    state = {
        counters: [],
    };
    //Is called once when an instance of an class is rendered
    //We can set the state directly
    //För att använda props måste vi lägga in det som en paramenter (props)
    //Går inte att använda setState({ })
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counters: [],
    //     };
    // }

    callApi() {
        fetch("http://localhost:9000/counters")
            .then((res) => res.json())
            .then((res) =>
                this.setState({
                    counters: res,
                })
            );
    }

    addCounter() {
        fetch("http://localhost:9000/counters", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((inf) => {
                console.log(inf);
            });
    }

    //Anropas efter vår komponent är renderad i vår DOM
    //Perfekt för att använda ajax calls från vår server
    //Går att använda setState({ })
    //Alla children är rendered
    componentDidMount() {
        //Ajax calls
        this.callApi();
    }

    // componentDidUpdate( prevState ){
    //     // if (prevProps.counter.value !== this.props.counter.value) {
    //     //     //Ajax call and get new data from server

    //     // }
    //     console.log(prevState);
    // }

    handleIncrement = (counter) => {
        // const counters = [...this.state.counters];
        // const index = counters.indexOf(counter);
        // counters[index] = { ...counter };
        // counters[index].value++;
        // this.setState({ counters });
        fetch("http://localhost:9000/counters/" + counter.id, {
            method: "PUT",
        })
            .then((res) => {
                res.json();
            })
            .then((data) => {});
    };

    handleDecrement = (counter) => {
        fetch("http://localhost:9000/counters/" + counter.id, {
            method: "PUT",
        }).then((res) => {
            res.json();
        });
    };

    // //Parent skickar en metod till child
    // handleDelete = (counterId) => {
    //     const counters = this.state.counters.filter(
    //         (counter) => counter.id !== counterId
    //     );
    //     this.setState({ counters });
    // };
    render() {
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
                        onDecrement={this.handleDecrement}
                    />
                    <button onClick={this.addCounter}>Add</button>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
