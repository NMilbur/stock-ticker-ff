import { CssBaseline, ThemeProvider } from '@mui/material';
import { DARK_THEME } from 'utils/styles';
import Ticker from 'views/Ticker';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <CssBaseline />
      <Ticker />
    </ThemeProvider>
  );
}

export default App;
