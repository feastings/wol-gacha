import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { STATE_INIT, useUserContext } from '@context/UserContext';
import type { SxProps, Theme } from '@mui/material/styles';

type DisplayType = 'full' | 'side';
export interface HomePartnerProps {
  displayAs: DisplayType,
};

function HomePartner({
  displayAs,
}: HomePartnerProps) {
  const userContext = useUserContext();

  // placeholder for now
  function getBackgroundImage() {
    return `./test-sprite-${userContext.user?.partnerCharacterId}.png`;
  };

  function getStyle() {
    const gradientY = 'linear-gradient(\
      to top, transparent 0%, transparent 10%, black 60%, black\
    )';

    const style: SxProps<Theme> = {
      backgroundImage: `url("${getBackgroundImage()}")`,
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

  return userContext.status === STATE_INIT ? <Skeleton width="100%" /> : <Box sx={getStyle()} />
};

export default HomePartner;
