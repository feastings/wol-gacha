import type React from 'react';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

import moonIcon from '/moon.svg';
import sunIcon from '/sun.svg';

const LightButton: React.FC = () => {
  return (
    <IconButton
      aria-label="theme-button-light"
      size="small"
      sx={{
        backgroundColor: 'primary.light',
        marginLeft: '-8px',
        marginTop: '-6px'
      }}
    >
      <img src={sunIcon} />
    </IconButton>
  );
};

const DarkButton: React.FC = () => {
  return (
    <IconButton
      aria-label="theme-button-dark"
      size="small"
      sx={{
        backgroundColor: 'primary.dark',
        marginTop: '-6px'
      }}
    >
      <img src={moonIcon} />
    </IconButton>
  );
};

const ThemeSwitch: React.FC = () => {
  return (
    <Switch
      checkedIcon={<DarkButton />}
      icon={<LightButton />}
    />
  );
};

export default ThemeSwitch;
