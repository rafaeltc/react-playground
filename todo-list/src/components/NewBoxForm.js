import React, { Component } from 'react'
import './NewBoxForm.css'
import uuidv4 from 'uuid/v4'

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {text:''}
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleAdd() {
        if(this.state.text) {
            this.props.add({...this.state, id:uuidv4(), strike:false, editable:false});
            this.setState({text:''})
        }
    }

    handleChange(evt){
        this.setState({text:evt.target.value});
    }

    render() {
        return <div className='NewBoxForm'>
            <h3>New Todo</h3>
            <input placeholder="New Todo" onChange={this.handleChange} value={this.state.text}></input>
            <button onClick={this.handleAdd}>ADD TODO</button>
        </div>
    }
}

export default NewBoxForm;