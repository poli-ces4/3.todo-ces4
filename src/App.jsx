import { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {
	const [inputTodo, setInputTodo] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.appwrapper}>
				<div>
					<Header />
				</div>
				<div>
					<Form
						inputTodo={inputTodo}
						setInputTodo={setInputTodo}
						todos={todos}
						setTodos={setTodos}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
