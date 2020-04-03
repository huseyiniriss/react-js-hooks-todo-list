import React from 'react';

const TodoForm = ({value, onChangeTodo, onClickAddTodo}) => (
    <div id='todoForm'>
        <input
            type="text"
            placeholder="todo"
            value={value}
            onChange={onChangeTodo}
        />
        <button onClick={onClickAddTodo}>Add</button>
    </div>
);

export default TodoForm;
