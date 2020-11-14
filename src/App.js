import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import theme from './styles/theme';
import Global from './layout/global';
import store from './store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
