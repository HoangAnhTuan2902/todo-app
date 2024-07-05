function TodoItem({ index, name, level, onClickDelete, onClickEdit }) {
	const levelMapping = {
		0: { text: 'Low', class: 'label label-default' },
		1: { text: 'Medium', class: 'label label-info' },
		2: { text: 'High', class: 'label label-danger' },
	};
	const { text, class: levelClass } = levelMapping[level] || { text: level, class: '' };
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
