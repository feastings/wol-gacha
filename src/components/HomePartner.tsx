import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { useContext } from 'react';
import UserContext from '@/context/UserContext';

type DisplayType = 'full' | 'side';
export interface HomePartnerProps {
  displayAs: DisplayType,
};

function HomePartner({
  displayAs,
}: HomePartnerProps) {
  const characterId = useContext(UserContext)?.partnerCharacterId;

  // placeholder for now
  function getBackgroundImage() {
    return `/wol-gacha/src/assets/test-sprite-${characterId}.png`;
  };

  function getStyle() {
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

  return (
    <Box sx={getStyle()} />
  );
};

export default HomePartner;
