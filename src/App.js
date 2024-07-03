import '~/css/bootstrap.min.css';
import '~/css/style.css';

function App() {
	return (
		<div className="container">
			<div className="page-header">
				<h1>
					Project 01 - ToDo List <small>ReactJS</small>
				</h1>
			</div>
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div className="input-group">
						<input
							className="form-control"
							placeholder="Search item name"
							type="text"
						/>
						<span className="input-group-btn">
							<button
								className="btn btn-info"
								type="button">
								Clear
							</button>
						</span>
					</div>
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div className="dropdown">
						<button
							aria-expanded="true"
							aria-haspopup="true"
							className="btn btn-default dropdown-toggle"
							data-toggle="dropdown"
							type="button">
							Sort by <span className="caret" />
						</button>
						<ul className="dropdown-menu">
							<li>
								<a role="button">Name ASC</a>
							</li>
							<li>
								<a role="button">Name DESC</a>
							</li>
							<li
								className="divider"
								role="separator"
							/>
							<li>
								<a role="button">Level ASC</a>
							</li>
							<li>
								<a role="button">Level DESC</a>
							</li>
						</ul>
						<span className="label label-success label-medium">NAME - DESC</span>
					</div>
				</div>
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
					<button
						className="btn btn-info btn-block marginB10"
						type="button">
						Add Item
					</button>
				</div>
			</div>
			<div className="row marginB10">
				<div className="col-md-offset-7 col-md-5">
					<form className="form-inline">
						<div className="form-group">
							<input
								className="form-control"
								placeholder="Item Name"
								type="text"
							/>
						</div>
						<div className="form-group">
							<select className="form-control">
								<option value="0">Small</option>
								<option value="1">Medium</option>
								<option value="2">High</option>
							</select>
						</div>
						<button
							className="btn btn-primary"
							type="button">
							Submit
						</button>
						<button
							className="btn btn-default"
							type="button">
							Cancel
						</button>
					</form>
				</div>
			</div>
			<div className="panel panel-success">
				<div className="panel-heading">List Item</div>
				<table className="table table-hover ">
					<thead>
						<tr>
							<th
								className="text-center"
								style={{
									width: '10%',
								}}>
								#
							</th>
							<th>Name</th>
							<th
								className="text-center"
								style={{
									width: '15%',
								}}>
								Level
							</th>
							<th
								style={{
									width: '15%',
								}}>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-center">1</td>
							<td>Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết</td>
							<td className="text-center">
								<span className="label label-danger">High</span>
							</td>
							<td>
								<button
									className="btn btn-warning btn-sm"
									type="button">
									Edit
								</button>
								<button
									className="btn btn-danger btn-sm"
									type="button">
									Delete
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">2</td>
							<td>Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018</td>
							<td className="text-center">
								<span className="label label-default">Small</span>
							</td>
							<td>
								<button
									className="btn btn-warning btn-sm"
									type="button">
									Edit
								</button>
								<button
									className="btn btn-danger btn-sm"
									type="button">
									Delete
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">3</td>
							<td>Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo</td>
							<td className="text-center">
								<span className="label label-info">Medium</span>
							</td>
							<td>
								<button
									className="btn btn-warning btn-sm"
									type="button">
									Edit
								</button>
								<button
									className="btn btn-danger btn-sm"
									type="button">
									Delete
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">4</td>
							<td>Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết</td>
							<td className="text-center">
								<span className="label label-info">Medium</span>
							</td>
							<td>
								<button
									className="btn btn-warning btn-sm"
									type="button">
									Edit
								</button>
								<button
									className="btn btn-danger btn-sm"
									type="button">
									Delete
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">5</td>
							<td>VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết</td>
							<td className="text-center">
								<span className="label label-info">Medium</span>
							</td>
							<td>
								<button
									className="btn btn-warning btn-sm"
									type="button">
									Edit
								</button>
								<button
									className="btn btn-danger btn-sm"
									type="button">
									Delete
								</button>
							</td>
						</tr>
						<tr>
							<td className="text-center">6</td>
							<td>
								<input
									className="form-control"
									defaultValue="F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020"
									type="text"
								/>
							</td>
							<td className="text-center">
								<select className="form-control">
									<option>Small</option>
									<option>Medium</option>
									<option>High</option>
								</select>
							</td>
							<td>
								<button
									className="btn btn-default btn-sm"
									type="button">
									Cancel
								</button>
								<button
									className="btn btn-success btn-sm"
									type="button">
									Save
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
