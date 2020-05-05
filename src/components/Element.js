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

        return (
            <div className="element-square" id={element.number} style={{ gridRow: element.ypos, gridColumn: element.xpos, backgroundColor: this.props.filterFunction(element) }} key={element.number}>
                <span className="element-number">{element.number}</span>
                <span className="element-name">{element.name}</span>
                <span onMouseOver={this.handleMouseOver} className="element-symbol">{element.symbol}</span>
            </div>
        )
    }
}

export default Element;