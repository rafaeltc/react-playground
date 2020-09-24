import React, { Component } from 'react'
import './NewBoxForm.css'
import uuidv4 from 'uuid/v4'

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {text:''}
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAdd() {
        if(this.state.text) {
            this.props.add({...this.state, id:uuidv4(), strike:false, editable:false});
            this.setState({text:''})
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.add({...this.state, id:uuidv4()});
        this.setState({text:""});
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewBoxForm"> 
                <label htmlFor="text">New Todo</label>
                <input type="text" placeholder="New Todo" id="text" value={this.state.text} onChange={this.handleChange} name="text"/>
                <button>Add Task</button>
            </form>
        )
    }
}

export default NewBoxForm;