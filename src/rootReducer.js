const INITIAL_STATE = { todos: [] };

function rootReducer(state=INITIAL_STATE, action){
    if(action.type === 'ADD_TODO'){
        return {todos: [...state.todos, action.payload]}
    }
    else if(action.type === 'DELETE_TODO'){
        return { todos: state.todos.filter( t => t.id !== action.payload)}
    }
    else{
        return state;
    }
}

export default rootReducer;