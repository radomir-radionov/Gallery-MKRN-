import { useState } from 'react';
import { LightBox } from 'components';
import { GalleryStyled, Img, Photo, Photos } from './style';
import { TPhoto } from 'types/app';

type TProps = {
  photos: TPhoto[];
};

const Gallery = ({ photos }: TProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<TPhoto | null>(null);

  const handlePhotoClick = (photo: TPhoto) => () => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <GalleryStyled>
      <Photos>
        {photos?.map((photo: TPhoto) => (
          <Photo key={photo._id} onClick={handlePhotoClick(photo)}>
            <Img src={photo.url} alt='photo' />
          </Photo>
        ))}
      </Photos>
      {lightboxOpen && (
        <LightBox photo={selectedPhoto} onClose={closeLightbox} />
      )}
    </GalleryStyled>
  );
};

export default Gallery;
