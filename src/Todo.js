import React, { Component } from 'react';
//import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(evt) {
        this.props.triggerDelete(evt.target.id);
    }

  render() {
    return (
        <div className="Todo" >
            <li key={this.props.id}>{this.props.todo}</li>
            <button className="Todo-deleteBtn" 
                    id={this.props.id} 
                    onClick={this.handleDelete}>Delete</button>
        </div>
    );
  }
}

export default Todo;