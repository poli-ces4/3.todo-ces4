import TodoItem from './TodoItem';
const TodoList = ({ todos, setTodos }) => {
	const deleteTodo = ({ id }) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default TodoList;
