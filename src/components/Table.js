import React, { Component } from 'react';
import PeriodicTableJSON from '../resources/PeriodicTableJSON.json';
import Element from './Element.js';
import FilteredElement from './FilteredElement';

/**
 * Grid component containing all Elements
 */
class Table extends Component {

    render() {

        /**
         * Creates an Element component with an element prop containing elementInformation
         * 
         * @param {*} elementInformation information of the element to be created
         */
        const createElement = (elementInformation) => {
            return (
                <FilteredElement element={elementInformation} filter={this.props.filter} /> 
            )
        }

        return (
            <div className="grid-container">
                {PeriodicTableJSON.elements.map(element => createElement(element))}
            </div>
        );
    }
}

export default Table;