import React, { Component } from 'react';
import Element from './Element.js';

class FilteredElement extends Component {

    getFilter = () => {
        switch (this.props.filter) {
            case "phase":
                return this.phaseColor;
            default:
                return this.categoryColor;
        }
    }

    categoryColor = (element) => {
        switch (element.category) {
            case "post-transition metal": return "pink"
            case "alkaline earth metal": return "lightsalmon";
            case "polyatomic nonmetal": return "palevioletred";
            case "diatomic nonmetal": return "paleturquoise";
            case "transition metal": return "thistle";
            case "alkali metal": return "lightgoldenrodyellow";
            case "lanthanide": return "cornflowerblue";
            case "metalloid": return "wheat";
            case "noble gas": return "plum";
            case "actinide": return "cadetblue";
            default: return "aquamarine";
        }
    }

    phaseColor = (element) => {
        return 298 > element.boil ? "lightblue" :
            298 < element.melt ? "palegreen" :
                "wheat";
    }

    render() {

        const filter = this.getFilter();

        return (
            <Element element={this.props.element} filterFunction={filter} />
        )
    }
}

export default FilteredElement;