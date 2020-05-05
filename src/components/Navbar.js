import React, { Component } from 'react';
import fav1 from '../resources/fav1.jpg';
/**
 * Main control interface for the app
 */
class Navbar extends Component {

    /**
    * Accerts that a new filter btn was pressed and assing the btn value as a state for the App.js component
    */
    handleFilterClick = (e) => {
        this.props.setFilter(e.target.value);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={fav1} width="30" height="30" className="d-inline-block align-top" alt="" />
                    Elementary
                </a>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.handleFilterClick} type="button" class="btn btn-secondary" value="category">Category</button>
                    <button onClick={this.handleFilterClick} type="button" class="btn btn-secondary" value="electronegativity">Electronegativity</button>
                    <button onClick={this.handleFilterClick} type="button" class="btn btn-secondary" value="half-life">Half-Life</button>
                    <button onClick={this.handleFilterClick} type="button" class="btn btn-secondary" value="phase">Phase</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;