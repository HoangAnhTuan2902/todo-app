function SearchIem({ search, setSearch }) {
	return (
		<div className="input-group">
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				className="form-control"
				placeholder="Search item name"
			/>
			<span className="input-group-btn">
				<button
					onClick={() => setSearch('')}
					className="btn btn-info"
					type="button">
					Clear
				</button>
			</span>
		</div>
	);
}

export default SearchIem;
