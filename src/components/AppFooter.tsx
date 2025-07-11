import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import infoIcon from '/info.svg';

const footerTheme = createTheme();
footerTheme.typography.body1 = {
  fontSize: '0.6rem',
  lineHeight: '0.5rem'
};

function CopyrightNotice() {
  return (
    <Typography>
      FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
      <br />
      FINAL FANTASY XIV © 2010 - 2025 SQUARE ENIX CO., LTD. All Rights Reserved.
      <br />
      Daily WoL is not affiliated with Square Enix.
    </Typography>
  );
}

function AppFooter() {
  const isWide = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={footerTheme}>
      <Box width="100%" bgcolor="primary.dark">
        <Toolbar variant="dense">
          {isWide ? <CopyrightNotice /> : (
            <Tooltip arrow title={<CopyrightNotice />}>
              <IconButton
                aria-label="footer-info-button"
                sx={{ borderRadius: 3 }}
                onClick={() => {}}
              >
                <img src={infoIcon} />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </Box>
    </ThemeProvider>
  );
};

export default AppFooter;
