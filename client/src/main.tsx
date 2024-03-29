import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'App';
import GlobalStyles from 'styles/globalStyles';
import store from 'store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </StrictMode>
);
