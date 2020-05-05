import React, { Component } from 'react';

/**
 * Render the view of a single periodic element
 */
class Element extends Component {
    
    handleMouseOver = (e) => {
        console.log(e.target);
    }
    
    render() {
        
        const element = this.props.element;
        
        const getColor = (element) => {
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

        return (
            <div className="element-square" id={element.number} style={{ gridRow: element.ypos, gridColumn: element.xpos, backgroundColor: getColor(element) }} key={element.number}>
                <span className="element-number">{element.number}</span>
                <span className="element-name">{element.name}</span>
                <span onMouseOver={this.handleMouseOver} className="element-symbol">{element.symbol}</span>
            </div>
        )
    }
}

export default Element;