import styles from './TodoItem.module.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
const TodoItem = ({ todo, deleteTodo }) => {
	return (
		<li className={styles.list}>
			<div className={styles.listItem}>{todo.title}</div>
			<div>
				<button>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
				<button>
					<FaCheck />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
