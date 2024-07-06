/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
function Sort({ sort, setSort, handleSort }) {
	const [popup, setPopup] = useState('');
	const handleSortSelection = (type, order) => {
		setSort({ type, order });
	};

	return (
		<div className={`dropdown ${popup}`}>
			<button
				onClick={() => setPopup(popup === 'open' ? '' : 'open')}
				className="btn btn-default dropdown-toggle"
				type="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Sort by <span className="caret" />
			</button>
			<ul className="dropdown-menu">
				<li>
					<a
						onClick={() => {
							handleSortSelection('Name', 'ASC');
							setPopup('');
						}}
						role="button">
						Name ASC
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							handleSortSelection('Name', 'DESC');
							setPopup('');
						}}
						role="button">
						Name DESC
					</a>
				</li>
				<li
					role="separator"
					className="divider"
				/>
				<li>
					<a
						onClick={() => {
							handleSortSelection('Level', 'ASC');
							setPopup('');
						}}
						role="button">
						Level ASC
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							handleSortSelection('Level', 'DESC');
							setPopup('');
						}}
						role="button">
						Level DESC
					</a>
				</li>
			</ul>
			<span
				onClick={handleSort}
				className="label label-success label-medium">
				{sort.type} - {sort.order}
			</span>
		</div>
	);
}

export default Sort;
