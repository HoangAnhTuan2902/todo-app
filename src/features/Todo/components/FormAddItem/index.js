import React, { useState } from 'react';

function FormAddItem({ handleSubmit }) {
	const [data, setData] = useState({ name: '', level: 0 });

	const handleClearForm = () => {
		setData({ name: '', level: 0 });
	};

	return (
		<form className="form-inline">
			<div className="form-group">
				<input
					onChange={(e) => setData({ ...data, name: e.target.value })}
					value={data.name}
					type="text"
					className="form-control"
					placeholder="Item Name"
				/>
			</div>
			<div className="form-group">
				<select
					value={data.level}
					onChange={(e) => setData({ ...data, level: e.target.value })}
					className="form-control">
					<option value={0}>Low</option>
					<option value={1}>Medium</option>
					<option value={2}>High</option>
				</select>
			</div>
			<button
				onClick={() => {
					handleSubmit(data);
					handleClearForm();
				}}
				type="button"
				className="btn btn-primary">
				Submit
			</button>
			<button
				onClick={handleClearForm}
				type="button"
				className="btn btn-default">
				Cancel
			</button>
		</form>
	);
}

export default FormAddItem;
