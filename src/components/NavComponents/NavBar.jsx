import React, { Component } from "react";
import NavBarButton from "./NavBarButton";

class NavBar extends Component {

    render() {
        return (
            <nav className="sticky top-0 h-16  w-screen bg-[#FAF8F6] shadow-xl flex items-center justify-between z-30">
                <div className="grid grid-cols-3 w-max">
                    <NavBarButton
                        name="Home"
                        link=""
                    />
                    <NavBarButton
                        name="Recepten"
                        link="recepten"
                    />
                    <NavBarButton
                        name="Lijst"
                        link="lijst"
                    />
                </div>

                <div className="right-10 relative text-center flex space-x-4 items-center">
                    <NavBarButton
                        name="Profiel"
                        link="profiel"
                    />
                </div>
            </nav>
        );
    }
}

export default NavBar;