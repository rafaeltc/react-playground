import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text,
            strike: props.strike,
            strikethrough: props.strikethrough,
            edit: props.edit,
            editable: props.editable,
            save: props.save
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleStrikethrough = this.handleStrikethrough.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleRemove() {
        this.props.remove(this.state.id);
    }

    handleStrikethrough() {
        this.props.strikethrough(this.props.id);
    }

    handleChange(evt) {
        this.setState({text: evt.target.value});
    }

    handleEdit() {
        this.props.edit(this.state.id);
    }

    handleSave() {
        this.props.save({id:this.state.id, text:this.state.text})
    }

    render() {
        
        const boxStyle = {width:this.props.width, height:this.props.width, backgroundColor: this.props.color};
        const spanStyle = {textDecoration: this.props.strike ? 'line-through': ''};

        const item = this.props.editable 
        ? <div>
            <input onChange={this.handleChange} value={this.state.text}/>
            <button onClick={this.handleSave}>Save</button>
        </div>
        : <div>
            <span onClick={this.handleStrikethrough} style={spanStyle}>{this.state.text}</span>
            <i className="fas fa-pen" onClick={this.handleEdit}></i> 
            <i className="far fa-trash-alt" onClick={this.handleRemove}></i>
        </div>  
              
        return <div className="Box" style={boxStyle}>
            {item}
        </div>
    }
}

export default Box;