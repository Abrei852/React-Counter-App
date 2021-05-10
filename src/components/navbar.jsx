import React from "react";

//Stateless functional component definieras med function istället för navbar extends component
//Object destructor används för att ta det värdet som vi vill ha för att ha en renare kod
//Går inte att använda lifecycle hooks

const NavBar = ({ totalCounters }) => {
    console.log("navbar rendered");
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill bg-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
