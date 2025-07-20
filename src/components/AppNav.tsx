import { Link, useLocation } from 'react-router';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import galleryIcon from '/gallery.svg';
import homeIcon from '/home.svg';

export const PATH_HOME = '/';
export const PATH_GALLERY = '/gallery';

const AppNav: React.FC = () => {
  const location = useLocation();

  function isCurrView(path?: string): boolean {
    return location.pathname === path;
  };

  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        aria-label="nav-home-button"
        component={Link}
        disabled={isCurrView(PATH_HOME)}
        sx={{ borderRadius: 3 }}
        to={PATH_HOME}
      >
        <img src={homeIcon} />
      </IconButton>
      <IconButton
        aria-label="nav-gallery-button"
        component={Link}
        disabled={isCurrView(PATH_GALLERY)}
        sx={{ borderRadius: 3 }}
        to={PATH_GALLERY}
      >
        <img src={galleryIcon} />
      </IconButton>
    </Stack>
  );
};

export default AppNav;
