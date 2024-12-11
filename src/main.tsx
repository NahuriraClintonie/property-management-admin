import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the redux store
import App from './App';

const rootElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}> {/* Wrap the App in Provider */}
    <App />
  </Provider>
);
