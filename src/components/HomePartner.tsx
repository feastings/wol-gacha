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
  const gradientY = 'linear-gradient(\
    to top, transparent 0%, transparent 10%, black 60%, black\
  )';

  const style: SxProps<Theme> = {
    backgroundImage: `url('${getBackgroundImage()}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexGrow: 1,
    WebkitMaskImage: gradientY,
    maskImage: gradientY,
  };

  if (displayAs === 'side') {
    const gradientX = 'linear-gradient(\
      to right, transparent 0%, black 50%, black 90%, transparent\
    )';
    style.WebkitMaskImage = gradientX;
    style.maskImage = gradientX;
    style.marginLeft = '-8dvw'
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
