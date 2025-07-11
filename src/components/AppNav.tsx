import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import galleryIcon from '/gallery.svg';
import homeIcon from '/home.svg';

function AppNav() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        aria-label="nav-home-button"
        sx={{ borderRadius: 3 }}
        onClick={() => {}}
      >
        <img src={homeIcon} />
      </IconButton>
      <IconButton
        aria-label="nav-gallery-button"
        sx={{ borderRadius: 3 }}
        onClick={() => {}}
      >
        <img src={galleryIcon} />
      </IconButton>
    </Stack>
  );
};

export default AppNav;
