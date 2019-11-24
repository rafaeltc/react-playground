import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './ColorBoxGrid.css'


class ColorBoxGrid extends Component {

    static defaultProps = {
        numBoxes: 16
    };

    render(){
        const boxes = Array.from({length:this.props.numBoxes}).map(
            (el, index) => <ColorBox key={index}/>
        );
        
        return (<div className="ColorBoxGrid">
            {boxes}
        </div>)
    }
}

export default ColorBoxGrid;