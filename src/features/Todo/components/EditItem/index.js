import React, { useEffect, useState } from 'react';

function EditItem({ onClickCancel, editItem, handleEditInput }) {
	const initLevel = editItem.item.level;

	const [level, setLevel] = useState(initLevel);
	useEffect(() => {
		setLevel(initLevel);
	}, [initLevel]);

	const handleChangeLevel = (e) => {
		setLevel(e.target.value);
	};

	return (
		<tr>
			<td className="text-center">{editItem.index}</td>
			<td>
				<input
					type="text"
					className="form-control"
					onChange={(e) => handleEditInput(e)}
					value={editItem.item.name}
				/>
			</td>
			<td className="text-center">
				<select
					value={level}
					onChange={handleChangeLevel}
					className="form-control">
					<option value={0}>Low</option>
					<option value={1}>Medium</option>
					<option value={2}>High</option>
				</select>
			</td>
			<td>
				<button
					onClick={onClickCancel}
					type="button"
					className="btn btn-default btn-sm">
					Cancel
				</button>
				<button
					type="button"
					className="btn btn-success btn-sm">
					Save
				</button>
			</td>
		</tr>
	);
}

export default EditItem;
