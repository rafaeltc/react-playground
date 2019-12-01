import React, { Component } from 'react'
import './BoxList.css'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boxes:[]
        }
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.strikethrough = this.strikethrough.bind(this);
    }

    remove(id) {
        this.setState(st => ({
            boxes: st.boxes.filter( box => box.id !== id)
        }));
    }

    add(box) {
        this.setState(st => ({
            boxes: [...st.boxes, box]
        }));
    }

    edit(id) {
        this.setState(st => ({
            boxes: st.boxes.map(box => ({...box, editable: box.id === id ? !box.editable : box.editable}))
        }));
    }

    strikethrough(id) {
        this.setState(st => ({
            boxes: st.boxes.map(box => ({...box, strike: box.id === id ? !box.strike : box.strike}))
        }));
    }

    save(item) {

        // const boxes = this.state.boxes;
        // const updatedItem = boxes.filter(it => it.id === item.id);

        this.setState(st => ({
            boxes: st.boxes.map(box => (
                {
                    ...box, 
                    editable: box.id === item.id ? !box.editable : box.editable,
                    text: box.id === item.id ? item.text : box.text
                }))
        }));
    }

    render() {
        const boxes = this.state.boxes.map(
            box => <Box height="2em" width="95%" color="salmon"
                        key={box.id} id={box.id} 
                        text={box.text} strike={box.strike} editable={box.editable} 
                        remove={this.remove} 
                        strikethrough={this.strikethrough}
                        save={this.save}
                        edit={this.edit}/>
        ); 
        return <div className="BoxList">
            <h1>Todo List!</h1>
            <h4>A simple React Todo List App.</h4>
            {boxes}
            <NewBoxForm add={this.add}/>
        </div>
    }   
}

export default BoxList;