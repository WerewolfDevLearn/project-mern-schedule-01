import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/mern-front/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
