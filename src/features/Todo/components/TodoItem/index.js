import React, { useState } from 'react';
import { arrayLevel } from '~/components/ArrayLevel';

import classNames from 'classnames';

function TodoItem({ index, name, level, onClickDelete, onClickEdit }) {
	const { text, class: levelClass } = arrayLevel[level] || { text: level, class: '' };

	const [checkbox, setCheckbox] = useState(false);

	return (
		<tr>
			<td className="text-center">{index}</td>
			<td className={checkbox ? classNames('active-item') : classNames('')}>{name}</td>
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
				<input
					value={checkbox}
					onChange={(e) => setCheckbox(e.target.checked)}
					style={{ marginLeft: 10 }}
					type="checkbox"
				/>
			</td>
		</tr>
	);
}

export default TodoItem;
