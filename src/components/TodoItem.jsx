import styles from './TodoItem.module.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
const TodoItem = ({ todo }) => {
	return (
		<li className={styles.list}>
			<div className={styles.listItem}>{todo.title}</div>
			<div>
				<button>
					<FaEdit />
				</button>
				<button>
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
