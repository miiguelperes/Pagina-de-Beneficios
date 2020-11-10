import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LayoutHome from './components/LayoutHome';
import store from './store';
document.title = "Benefícios Martins"
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#ffffff'
      }
    }
  });
const App = () => <Provider store={store}>
    
    <MuiThemeProvider theme={theme}>
    <LayoutHome />
    </MuiThemeProvider>
    </Provider>;

export default App;
