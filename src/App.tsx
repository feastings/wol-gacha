import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppFooter from '@components/footer/AppFooter';
import { AlertProvider } from '@context/AlertContext.tsx'
import { UserProvider } from '@context/UserContext';

import ViewContainer from './ViewContainer';

// TODO: cuter theme :(
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'Roboto'
    ].join(','),
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '0.75rem'
    }
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
                <ViewContainer />
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
