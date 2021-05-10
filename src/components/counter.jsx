import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    //Genom att konvertera metoden till en arrow funktion kan den ärva this
    handleIncrement = product => {
        // Om det är en referens som t.ex object.method() kommer this vara undefined,
        // om strictmode är enabled kommer this även vara undefined.
        // Om den istället skickas som en stand-alone funktion kommer this vara definierat
        // this.setState({
        //     count: this.state.count + 1
        // })
        console.log(product);
    };

    // Async
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={ () => this.handleIncrement(product)}
                    className={this.getButtonClasses()}
                >
                    Increment
                </button>
            </div>
        );
    }
    //Dynamiska klasser
    //Går att markera en text och klicka på shift+ctrl+r för att skapa en metod
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    getButtonClasses() {
        let classes = "btn bg-secondary btn-sm";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
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
