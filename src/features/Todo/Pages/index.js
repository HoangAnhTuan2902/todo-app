import lodash from 'lodash';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDebounce } from '~/components/Hooks';
import TodoTitle from '~/features/Todo/components/TodoTitle';
import SearchIem from '~/features/Todo/components/SearchItem';
import SortItem from '~/features/Todo/components/SortItem';
import FormAddItem from '~/features/Todo/components/FormAddItem';
import TodoList from '~/features/Todo/components/TodoList';

const TodoFeatures = () => {
	const initTodoList = [
		{
			id: uuidv4(),
			name: 'Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết',
			level: 2, // high
		},
		{
			id: uuidv4(),
			name: 'Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018',
			level: 0, // low
		},
		{
			id: uuidv4(),
			name: 'Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo',
			level: 1, // medium
		},
		{
			id: uuidv4(),
			name: 'Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết',
			level: 0, // low
		},
		{
			id: uuidv4(),
			name: 'VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết',
			level: 2, // high
		},
		{
			id: uuidv4(),
			name: 'F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020',
			level: 1, // medium
		},
	];

	const [todoList, setTodoList] = useState(initTodoList);
	const [originalTodoList, setOriginalTodoList] = useState(initTodoList);
	const [editItem, setEditItem] = useState(false);
	const [toggleForm, setToggleForm] = useState(false);
	const [sort, setSort] = useState({ type: 'Name', order: 'ASC' });
	const [search, setSearch] = useState('');

	const debouncedSearch = useDebounce(search, 500);
	useEffect(() => {
		const newItems = originalTodoList.filter((item) =>
			item.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
		);
		setTodoList(newItems);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch, originalTodoList]);

	const handleSort = () => {
		const sortedTodos = lodash.orderBy(
			todoList,
			[sort.type.toLowerCase()],
			[sort.order.toLowerCase()],
		);
		setTodoList(sortedTodos);
	};
	const handleSubmit = (data) => {
		if (!data.name) {
			swal('Bạn chưa nhập tên công việc', { icon: 'warning' });
			return;
		}
		const newItems = [...todoList];
		newItems.push({ id: uuidv4(), ...data });
		setOriginalTodoList(newItems);
		setTodoList(newItems);
	};

	const onClickDelete = (index) => {
		swal({
			title: 'bạn muốn xóa ?',
			icon: 'warning',
			buttons: true,
		}).then((willDelete) => {
			willDelete && setTodoList(todoList.filter((item, idx) => idx !== index));
			!willDelete && swal('bạn sợ à ?', { icon: 'info' });
		});
	};

	const handleSaveEdit = () => {
		swal({
			title: 'bạn muốn lưu thay đổi ?',
			icon: 'warning',
			buttons: true,
		}).then((willSave) => {
			if (willSave) {
				const newItems = [...todoList];
				newItems[editItem.index] = editItem.item;
				setTodoList(newItems);
				setEditItem(false);
			}
		});
	};
	const onClickEdit = (item, index) => {
		setEditItem({ index, item });
	};

	const handleEditInput = (e) => {
		setEditItem({ ...editItem, item: { ...editItem.item, name: e.target.value } });
	};

	const onClickCancel = () => {
		swal({
			title: 'bạn muốn hủy thay đổi ?',
			icon: 'warning',
			buttons: true,
		}).then((willCancel) => {
			willCancel && setEditItem(false);
		});
	};

	return (
		<div className="container">
			<TodoTitle />
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<SearchIem
						search={search}
						setSearch={setSearch}
					/>
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<SortItem
						handleSort={handleSort}
						sort={sort}
						setSort={setSort}
					/>
				</div>
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
					<button
						onClick={() => setToggleForm(!toggleForm)}
						className="btn btn-info btn-block marginB10"
						type="button">
						{!toggleForm ? 'Add Item' : 'Close'}
					</button>
				</div>
			</div>
			<div className="row marginB10">
				<div className="col-md-offset-7 col-md-5">
					{toggleForm && <FormAddItem handleSubmit={handleSubmit} />}
				</div>
			</div>
			<TodoList
				handleSaveEdit={handleSaveEdit}
				setEditItem={setEditItem}
				editItem={editItem}
				items={todoList}
				handleEditInput={handleEditInput}
				onClickEdit={onClickEdit}
				onClickCancel={onClickCancel}
				onClickDelete={onClickDelete}
			/>
		</div>
	);
};

export default TodoFeatures;
