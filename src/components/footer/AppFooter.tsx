import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import InfoDialog from './InfoDialog';
import ThemeSwitch from './ThemeSwitch';

function AppFooter() {
  return (
    <Box width="100%" bgcolor="primary.dark">
      <Toolbar variant="dense">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <InfoDialog />
          <ThemeSwitch />
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default AppFooter;
