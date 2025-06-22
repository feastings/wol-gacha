import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import testSprites from '@assets';

type DisplayType = 'full' | 'side';
export interface HomePartnerProps {
  displayAs: DisplayType,
};

function getBackgroundImage() {
  const idx = Math.floor(Math.random() * 3);
  return testSprites[idx];
};

function getStyle(displayAs: DisplayType) {
  const style: SxProps<Theme> = {
    backgroundImage: `url('${getBackgroundImage()}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flexGrow: 1,
  };

  if (displayAs === 'side') {
    style.backgroundPosition = 'left';
    style.WebkitMaskImage = 'linear-gradient(to right, transparent 0%, black 50%, black 95%, transparent)';
    style.maskImage = 'linear-gradient(to right, transparent 0%, black 50%, black 95%, transparent)';
  }

  return style;
};

function HomePartner({
  displayAs,
}: HomePartnerProps) {
  return (
    <Box sx={getStyle(displayAs)} />
  );
};

export default HomePartner;
