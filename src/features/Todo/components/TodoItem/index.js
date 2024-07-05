function TodoItem({ index, name, level, onClickDelete, onClickEdit }) {
	switch (level) {
		case 0:
			level = 'Low';
			break;
		case 1:
			level = 'Medium';
			break;
		case 2:
			level = 'High';
			break;
		default:
			break;
	}

	return (
		<tr>
			<td className="text-center">{index}</td>
			<td>{name}</td>
			<td className="text-center">
				<span
					className={
						level === 'Low'
							? 'label label-default'
							: level === 'Medium'
							? 'label label-info'
							: 'label label-danger'
					}>
					{level}
				</span>
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
