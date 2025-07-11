import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppFooter from '@components/AppFooter';
import { AlertProvider } from '@context/AlertContext.tsx'
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
        <UserProvider>
          <AlertProvider>
            <Grid container direction="column" height="100dvh">
              <Grid size="grow">
                <Home />
              </Grid>
              <Grid>
                <AppFooter />
              </Grid>
            </Grid>
          </AlertProvider>
        </UserProvider>
    </ThemeProvider>
  );
};

export default App;
