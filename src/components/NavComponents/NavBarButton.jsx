import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class NavBarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.name = props.name;
        this.link = props.link;
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center mx-4">
                <Link to={`/${this.link}`}>
                    <button className="text-lg font-bold text-[#5578f0] hover:text-[#69C3DF]">
                        {this.name}
                    </button>
                </Link>
            </div>
        );
    }
}

NavBarButton.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default NavBarButton;
