import styles from './TodoItem.module.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
const TodoItem = ({ todo, deleteTodo, checkTask }) => {
	return (
		<li className={styles.list}>
			<div
				className={`${styles.listItem} ${
					todo.completed ? styles.completed : ''
				}`}
			>
				{todo.title}
			</div>
			<div>
				<button>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
				<button onClick={() => checkTask(todo)}>
					<FaCheck />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
