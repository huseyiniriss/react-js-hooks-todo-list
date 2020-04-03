import React, {useState} from 'react';
import TodoItem from "./component/TodoItem";
import TodoForm from "./component/TodoForm";
import './style/style.css';

const App = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');

    const onClickDelete = (id) => {
      setTodoList(todoList.filter(value => (value.id !== id)));
    };

    const onClickEdit = (id) => {
        let todo = prompt("Edit todo", todoList.find(value => (value.id === id)).todo);
        if (todo === null || todo === "") {
            alert('todo must be');
        } else {
            const newTodoList = todoList.map(value => {
                if (value.id === id){
                    return {id: id, todo, completed: value.completed};
                }
                return value;
            });
            setTodoList(newTodoList);
        }
    };

    const onChangeTodo = (e) => {
      setTodo(e.target.value);
    };

    const onChangeCompleted = (e, id) => {
        const newTodoList = todoList.map(value => {
            if (value.id === id){
                return {id: value.id, todo:value.todo, completed: e.target.checked}
            }
            return value;
        });
        setTodoList(newTodoList);
    };

    const onClickAddTodo = () => {
        if (todo.length === 0){
            alert('todo must be');
            return;
        }
        let todoId = 1;
        if (todoList.length > 0){
            todoId = todoList[todoList.length - 1].id + 1;
        }
        setTodoList([...todoList, {id: todoId, todo, completed: false}]);
        setTodo('');
    };

    return (
        <div id="root">
            <span id="title">Todo App</span>
            <TodoForm
                value={todo}
                onChangeTodo={onChangeTodo}
                onClickAddTodo={onClickAddTodo}
            />
            <div id='todoList'>
                {todoList.map(value => (<TodoItem
                    key={value.id}
                    onClickDelete={() => {onClickDelete(value.id)}}
                    onClickEdit={() => {onClickEdit(value.id)}}
                    todo={value.todo}
                    onChangeCompleted={(e) => {onChangeCompleted(e, value.id)}}
                    completed={value.completed}
                />))}
            </div>
        </div>
    )
};

export default App;
