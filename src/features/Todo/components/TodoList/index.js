import EditItem from '~/features/Todo/components/EditItem';
import TodoItem from '~/features/Todo/components/TodoItem';

const TodoList = ({
	items,
	onClickDelete,
	onClickEdit,
	onClickCancel,
	editItem,
	handleEditInput,
}) => {
	const renderItems = () => {
		return items.map((item, index) => {
			return (
				<TodoItem
					onClickCancel={onClickCancel}
					onClickEdit={() => onClickEdit(item, index)}
					onClickDelete={onClickDelete}
					key={index}
					index={index}
					level={item.level}
					name={item.name}
				/>
			);
		});
	};
	return (
		<div className="panel panel-success">
			<div className="panel-heading">List Item</div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th
							style={{ width: '10%' }}
							className="text-center">
							#
						</th>
						<th>Name</th>
						<th
							style={{ width: '15%' }}
							className="text-center">
							Level
						</th>
						<th style={{ width: '15%' }}>Action</th>
					</tr>
				</thead>
				<tbody>
					{renderItems()}
					{editItem !== false && (
						<EditItem
							handleEditInput={handleEditInput}
							onClickCancel={onClickCancel}
							editItem={editItem}
						/>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;
