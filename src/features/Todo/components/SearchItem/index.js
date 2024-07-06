import React, { useRef } from 'react';
function SearchIem({ search, setSearch }) {
	const inputRef = useRef();
	return (
		<div className="input-group">
			<input
				ref={inputRef}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				className="form-control"
				placeholder="Search item name"
			/>
			<span className="input-group-btn">
				<button
					onClick={() => {
						setSearch('');
						inputRef.current.focus();
					}}
					className="btn btn-info"
					type="button">
					Clear
				</button>
			</span>
		</div>
	);
}

export default SearchIem;
