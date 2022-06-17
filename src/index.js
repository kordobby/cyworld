import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Styles settings */
import './index.css';
import GlobalStyled from './Components/GlobalStyled/GlobalStyled';

/* Redux settings */
import { Provider } from 'react-redux';
import store from './redux/configStore';

/* react-query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

/* Router settings */
import { BrowserRouter } from 'react-router-dom';

/* Cookies settings */
import { CookiesProvider} from 'react-cookie'

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <QueryClientProvider client = {queryClient}>
      <Provider store={store}>
          <BrowserRouter>
              {/* Global CSS */}
              <GlobalStyled />
              <App />
          </BrowserRouter>
      </Provider>
      </QueryClientProvider>
  </CookiesProvider>
);

