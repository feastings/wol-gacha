import { useState } from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import boxMdIcon from '/box-md.svg';
import boxLgIcon from '/box-lg.svg';
import boxSmIcon from '/box-sm.svg';
import searchIcon from '/search.svg';
import IconButton from '@mui/material/IconButton';

const THUMB_SM = 'sm';
const THUMB_MD = 'md';
const THUMB_LG = 'lg';

const Gallery: React.FC = () => {
  const [thumbSize, setThumbSize] = useState(THUMB_MD);

  const calcNumCols = () => {
    switch (thumbSize) {
      case THUMB_SM: return 5;
      case THUMB_LG: return 3;
      case THUMB_MD:
      default:
        return 4;
    };
  };

  const handleThumbSizeChange = (
    _: React.MouseEvent<HTMLElement>,
    newSize: string | null,
  ) => {
    if (newSize) {
      setThumbSize(newSize);
    }
  };

  const renderControls = () => {
    return (
      <Stack
        direction="row"
        justifyContent="flex-end"
        position="sticky"
        spacing={2}
        top={0}
      >
        <IconButton
          aria-label="nav-home-button"
          disabled
          sx={{ borderRadius: 2 }}
        >
          <img src={searchIcon} />
        </IconButton>
        <ToggleButtonGroup
          aria-label="thumb size"
          exclusive
          value={thumbSize}
          onChange={handleThumbSizeChange}
        >
          <ToggleButton aria-label="small thumb" value={THUMB_SM}>
            <img src={boxSmIcon} />
          </ToggleButton>
          <ToggleButton aria-label="medium thumb" value={THUMB_MD}>
            <img src={boxMdIcon} />
          </ToggleButton>
          <ToggleButton aria-label="large thumb" value={THUMB_LG}>
            <img src={boxLgIcon} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    );
  };

  const renderImageList = () => {
    return (
      <Container disableGutters sx={{ overflow: 'auto' }}>
        <ImageList cols={calcNumCols()} sx={{ margin: 0 }}>
          {Array(50).fill(0).map((_, idx) => (
            <ImageListItem
              key={`item-${idx}`}
              sx={{
                overflow: 'hidden',
                '& img': {
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover img': {
                  transform: 'scale(1.2)',
                },
              }}
            >
              <img
                src={`https://picsum.photos/164?random=${idx}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  };

  const renderPagination = () => {
    return (
      <Stack alignItems="center">
        <Pagination disabled shape="rounded" />
      </Stack>
    );
  };

  return (
    <Stack spacing={2} maxHeight="100%">
      {renderControls()}
      {renderImageList()}
      {renderPagination()}
    </Stack>
  );
};

export default Gallery;
