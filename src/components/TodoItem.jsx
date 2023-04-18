import styles from './TodoItem.module.css';
const TodoItem = ({ todo }) => {
	return (
		<li className={styles.list}>
			<div className={styles.listItem}>{todo.title}</div>
			<div>
				<button>Edit</button>
				<button>Delete</button>
				<button>Check</button>
			</div>
		</li>
	);
};

export default TodoItem;
