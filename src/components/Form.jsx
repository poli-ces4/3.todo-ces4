import { useEffect } from 'react';
import uuid4 from 'uuid4';
import styles from './Form.module.css';
const Form = ({ inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {
	const handlerInput = ({ target }) => {
		setInputTodo(target.value);
	};
	const handlerSubmit = e => {
		e.preventDefault();
		if (edit) {
			updateTitleTodo(edit.id, inputTodo, edit.completed);
		} else {
			const newTodo = {
				id: uuid4(),
				title: inputTodo,
				completed: false,
			};
			setTodos([...todos, newTodo]);
			setInputTodo('');
		}
	};
	const updateTitleTodo = (id, title, completed) => {
		const newTodos = todos.map(todo =>
			todo.id === id ? { id, title, completed } : todo
		);
		setTodos(newTodos);
		setEdit(null);
	};
	/*
	useEffect(() => {
		console.log('POR DEFECTO');
	});
	useEffect(() => {
		console.log('SIN DEPENDENCIAS');
	}, []);
	*/
	useEffect(() => {
		if (edit) {
			setInputTodo(edit.title);
		} else {
			setInputTodo('');
		}
	}, [edit]);

	return (
		<form onSubmit={handlerSubmit}>
			<input
				type='text'
				placeholder='Enter to Todo'
				name='task'
				value={inputTodo}
				onChange={handlerInput}
				className={styles.taskInput}
			/>
			<button type='submit' className={styles.button}>
				{edit ? 'Edit' : 'Add'}
			</button>
		</form>
	);
};

export default Form;
