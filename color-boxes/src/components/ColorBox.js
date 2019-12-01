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
        this.setState(st => {
            return {
                color: generateRandomRgb()
            }
        });
    }

    handleClick(e){
        this.setRandomColor();
    }

    render(){
        return <div className="ColorBox" onClick={this.handleClick} style={{backgroundColor:this.state.color}}/>
    }
}

export default ColorBox;