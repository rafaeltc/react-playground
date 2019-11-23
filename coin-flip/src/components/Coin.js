import React, { Component } from 'react'
import './Coin.css'

const img = {
    heads: "https://tinyurl.com/react-coin-heads-jpg",
    tails: "https://tinyurl.com/react-coin-tails-jpg"
};

class Coin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="coin">
                <img src={img[this.props.face]}/>
            </div>
    }
}

export default Coin;