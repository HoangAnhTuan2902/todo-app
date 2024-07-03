import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/following',
		component: Following,
	},
	{
		path: '/profile',
		component: Profile,
	},  
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
