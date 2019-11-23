import React, { Component } from 'react'
import Coin from './Coin'
import './CoinFlip.css'

class CoinFlip extends Component {
    constructor(props) {
        super(props);
        this.state = {face:null, heads:0, tails:0}
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        const newState = {...this.state};
        newState.face = (Math.random() >= 0.5) ? 'heads':'tails';
        newState.face == 'heads' ? newState.heads++ : newState.tails++;
        this.setState(newState);
    }

    render() {
        return <div className="CoinFlip">
            <h1>Let's flip a coin!</h1>
            {this.state.face && <Coin face={this.state.face}/>}
            <button onClick={this.flipCoin}>FLIP</button>
            <p>Out of {this.state.heads+this.state.tails} flips, there have been {this.state.heads} heads and {this.state.tails} tails</p>
        </div>
    }
}

export default CoinFlip;