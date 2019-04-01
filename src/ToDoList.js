import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import uuid from 'uuid/v4';
import Todo from './Todo';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.makeTodo = this.makeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    makeTodo(obj){
        let newTodo = {...obj, id: uuid()};
        this.props.dispatch({
            type: 'ADD_TODO',
            payload: newTodo   
        });
    };

    deleteTodo(id){
        this.props.dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    };

    render() {
        return (
            <div className="TodoList">
                <AddTodoForm triggerSubmit={this.makeTodo}/>
                <div className="TodoList-added">
                    {this.props.todos.map(m => 
                        <Todo key={m.id}
                              id={m.id}
                              img={m.img}
                              topText={m.topText}
                              bottomText={m.bottomText} 
                              triggerDelete={this.deleteTodo}
                              />
                        )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos };
}

const connectToSate = connect(mapStateToProps);

export default connectToSate(TodoList);