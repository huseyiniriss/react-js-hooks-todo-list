import React from 'react';

const TodoItem = ({
    todo,
    completed,
    onClickDelete,
    onClickEdit,
    onChangeCompleted
}) => (
    <div className='todo-item'>
        <input type="checkbox" onChange={onChangeCompleted} />
        <span className={completed ? 'todo-text completed' : 'todo-text'}>{todo}</span>
        <button onClick={onClickEdit}>edit</button>
        <button onClick={onClickDelete}>delete</button>
    </div>
);

export default TodoItem;
