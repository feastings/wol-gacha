import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { UserProvider } from '@context/UserContext';
import Home from '@views/Home';

// TODO: cuter theme :(
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'Roboto'
    ].join(',')
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        sx={{ display: 'flex', minHeight: '100dvh' }}
      >
        <UserProvider>
          <Home />
        </UserProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
