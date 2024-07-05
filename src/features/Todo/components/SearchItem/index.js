function SearchIem() {
	return (
		<div className="input-group">
			<input
				type="text"
				className="form-control"
				placeholder="Search item name"
			/>
			<span className="input-group-btn">
				<button
					className="btn btn-info"
					type="button">
					Clear
				</button>
			</span>
		</div>
	);
}

export default SearchIem;
