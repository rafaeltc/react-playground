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
            isEditable: props.isEditable,
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleStrikethrough = this.handleStrikethrough.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }

    handleStrikethrough() {
        this.props.strikethrough(this.props.id);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleEdit() {
        this.setState({isEditable : !this.state.isEditable});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.save(this.state.id, this.state.text);
        this.setState({isEditable: false})
    }

    render() {
        
        const boxStyle = {width:this.props.width, height:this.props.width, backgroundColor: this.props.color};
        const spanStyle = {textDecoration: this.props.strike ? 'line-through': ''};

        let result;
        if(this.state.isEditable) {
            result = (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.text} name="text" onChange={this.handleChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <span onClick={this.handleStrikethrough} style={spanStyle}>{this.state.text}</span>
                    <i className="fas fa-pen" onClick={this.handleEdit}></i> 
                    <i className="far fa-trash-alt" onClick={this.handleRemove}></i>
                </div> 
            )
        }


        // const item = this.props.isEditable 
        // ? <div>
        //     <input onChange={this.handleChange} value={this.state.text}/>
        //     <button onClick={this.handleSave}>Save</button>
        // </div>
        // : <div>
        //     <span onClick={this.handleStrikethrough} style={spanStyle}>{this.state.text}</span>
        //     <i className="fas fa-pen" onClick={this.handleEdit}></i> 
        //     <i className="far fa-trash-alt" onClick={this.handleRemove}></i>
        // </div>  
              
        return (result)
    }
}

export default Box;