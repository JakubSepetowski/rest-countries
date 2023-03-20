import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Main />
		</Provider>
	);
};
