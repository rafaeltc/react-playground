import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './ColorBoxGrid.css'


class ColorBoxGrid extends Component {

    static defaultProps = {
        numBoxes: 16
    };

    constructor(props){
        super(props);
        const colors = [];
        for(let i=0; i< this.props.numBoxes; i++) {
            colors.push('blue');
        }
        this.state = {colors};
    };

    render(){
        return (<div className="ColorBoxGrid">
            {this.state.colors.map(c => <ColorBox color={c}/>)}
        </div>)
    }
}

export default ColorBoxGrid;