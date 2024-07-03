import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import Item from './components/Item';
import ListItem from './components/ListItem';
import ItemEdit from './components/ItemEdit';

import '~/css/bootstrap.min.css';
import '~/css/style.css';

function App() {
	return (
		<div className="container">
			<Title />
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<Search />
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<Sort />
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
					<Form />
				</div>
			</div>
			<ListItem />
		</div>
	);
}

export default App;
