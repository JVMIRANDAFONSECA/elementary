import React, { Component } from 'react';
import fav1 from '../resources/fav1.jpg';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={fav1} width="30" height="30" className="d-inline-block align-top" alt="" />
                    Elementary
                </a>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Category</button>
                    <button type="button" class="btn btn-secondary">Electronegativity</button>
                    <button type="button" class="btn btn-secondary">Half-Life</button>
                    <button type="button" class="btn btn-secondary">Phase</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;