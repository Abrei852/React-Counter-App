import React, { Component } from "react";

class Counter extends Component {

    //Is called after an component is updated
    //Compare new prop to new prop
    //Ajax call to update, if update 
    //If not update no Ajax
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server
        }
    }

    //Called just before an component is removed from the DOM
    componentWillUnmount() {
        console.log("unmounted");
    }

    //Controlled component, har inte egen lokal state, får data från parent och skickar en event till parent

    // Async
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    className={this.getButtonClasses()}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    Increment
                </button>
                {/* child tar emot funktionen delete från prop */}
                <button
                    className="btn bg-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }
    //Dynamiska klasser
    //Går att markera en text och klicka på shift+ctrl+r för att skapa en metod
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    getButtonClasses() {
        let classes = "btn bg-secondary btn-sm";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;

// Om det inte ska skapas en onödig t.ex. div kan koden wrappas i React-Fragment

// stat = {
//     tags: ["tag1", "tag2", "tag3"],
// }
// render() {
//     return (
//         <div>
//             <span className={this.getBadgeClasses()}>
//                 {this.formatCount()}
//             </span>
//             <button className="btn bg-secondary btn-sm">Increment</button>
//             <ul>
//                 {this.state.tags.map((tag) => (
//Varje list-item måste ha en egen unik key i detta fall
//har varje tag redan en unik nyckel. Är det ett objekt
//kan det t.ex vara tag.id
//                     <li key={tag}>{tag}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// //Dynamiska klasser
// //Går att markera en text och klicka på shift+ctrl+r för att skapa en metod
// getBadgeClasses() {
//     let classes = "badge m-2 bg-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
// }

// formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
// }

//Använda metod för att visa data
// renderTags() {
//     if (this.state.tags.length === 0) {
//         return <p>There are no tags</p>;
//     }
//     return (
//         <ul>
//             {this.state.tags.map((tag) => (
//                 <li key={tag}>{tag}</li>
//             ))}
//         </ul>
//     );
// }

// // Ett sätt att ställa in en style
// // styles = {
// //     fontSize: 20,
// //     fontWeight: 'bold'
// // }
// // Bara att sedan lägga in style={this.styles} för att det ska fungera

// //Ett annat sätt är att lägga in en style i {{ }} t.ex {{ fontSize: 30 }}

// render() {
//     return <div>
//         {/* Man kan lägga till som en if statement utan en else dock */}
//         {/* Det första värdet före &&, this.state.tags.length === 0 är en boolean*/}
//         {/* Det andra värdet efter &&, "Please create a new tag" är en string*/}
//         {/*I Javascript kontrolleras om det första boolean värdet är true */}
//         {/*om det andra värdet inte är en boolean kollas det om strängen är tom eller inte */}
//         {/*är den tom kallas det för falsie och om den inte är tom kallas det för truthsie */}
//         { this.state.tags.length === 0 && "Please create a new tag" }
//         {this.renderTags()}
//         </div>;
// }

// //Ett sätt att skicka värden till t.ex klick metod
// //Skapa en konstruktor för att kunna binda data
// constructor() {
//     //Måste användas först för att constructor ska hämtas
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
// }

//<h4>{this.props.id}</h4> Man kan ta in props i en t.ex h4 genom
//att skicka id från parent och använda this.props.children

//Props är data som vi ger till en komponent. Props är readonly
//State är data lokalt i den komponenten. Kan modifiera prop om man lägger till den i state
// state = {
//     value: this.props.counter.value,
// };

// //Genom att konvertera metoden till en arrow funktion kan den ärva this
// handleIncrement = () => {
//     // Om det är en referens som t.ex object.method() kommer this vara undefined,
//     // om strictmode är enabled kommer this även vara undefined.
//     // Om den istället skickas som en stand-alone funktion kommer this vara definierat
//     this.setState({
//         value: this.state.value + 1,
//     });
// };
