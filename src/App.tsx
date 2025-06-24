import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UserContext from '@context/UserContext';
import Home from '@views/Home';

import type { UserData } from '@context/UserContext';

// TODO: cuter theme :(
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'Roboto'
    ].join(',')
  }
});

// placeholder for now
async function fetchUserData(): Promise<UserData> {
  const randomId = `${Math.floor(Math.random() * 3) + 1}`
    .padStart(2, '0');
  return {
    nickname: localStorage.getItem('nickname') || 'please set a nickname',
    partnerCharacterId: randomId
  };
}

function App() {
  const [userData, setUserData] = useState<UserData>(null);

  async function initUserData() {
    if (userData === null) {
      const res = await fetchUserData();
      setUserData(res);
    }
  };

  useEffect(() => {
    initUserData();
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        sx={{ display: 'flex', minHeight: '100dvh' }}
      >
        <UserContext value={userData}>
          <Home />
        </UserContext>
      </Container>
    </ThemeProvider>
  );
};

export default App;
