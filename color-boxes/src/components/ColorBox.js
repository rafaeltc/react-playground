import React, { Component } from 'react';
import './ColorBox.css';
import generateRandomRgb from '../utils';

class ColorBox extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setRandomColor = this.setRandomColor.bind(this);
        this.state = {color:generateRandomRgb()};
    }

    setRandomColor() {
        return {color:generateRandomRgb()};
    }

    handleClick(){
        this.setState(this.setRandomColor);
    }

    render(){
        return <div className="ColorBox" onClick={this.handleClick} style={{backgroundColor:this.state.color}}/>
    }
}

export default ColorBox;