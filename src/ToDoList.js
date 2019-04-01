import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import uuid from 'uuid/v4';
import Todo from './Todo';
import './TodoList.css';


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
                <ul>
                    {this.props.todos.map(t => 
                        <Todo key={t.id}
                              id={t.id}
                              todo={t.todo}
                              triggerDelete={this.deleteTodo}
                              />
                        )}
                </ul>
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