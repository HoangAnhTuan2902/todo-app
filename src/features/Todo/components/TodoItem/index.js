import { arrayLevel } from '~/components/ArrayLevel';
function TodoItem({ index, name, level, onClickDelete, onClickEdit }) {
	const { text, class: levelClass } = arrayLevel[level] || { text: level, class: '' };
	return (
		<tr>
			<td className="text-center">{index}</td>
			<td>{name}</td>
			<td className="text-center">
				<span className={levelClass}>{text}</span>
			</td>
			<td>
				<button
					onClick={onClickEdit}
					type="button"
					className="btn btn-warning btn-sm">
					Edit
				</button>
				<button
					onClick={() => onClickDelete(index)}
					type="button"
					className="btn btn-danger btn-sm">
					Delete
				</button>
			</td>
		</tr>
	);
}

export default TodoItem;
