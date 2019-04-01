import React, { Component } from 'react';


class AddTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todo: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerSubmit( this.state );
        this.setState({ 
            todo:''
        });

    }

    handleChange(evt){
        this.setState( {[evt.target.name]: evt.target.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor='todo'>Todo</label> <br/>
                  <input id='todo' name='todo' value={this.state.todo} onChange={this.handleChange}/> <br />

                  
                  
                  <button>Add Todo</button> 
                </form>
            </div>
        );
    }
}

export default AddTodoForm;