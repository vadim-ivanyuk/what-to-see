import { Provider } from 'react-redux';
import { store } from 'shared/api';

export const withStore = (component) => () =>
	<Provider store={store}>{component()}</Provider>;
