import { useEffect, useState } from 'react';
import { LightBox } from 'components';
import { GalleryStyled, Img, Photo, Photos } from './style';
import { TPhoto } from 'types/app';
import { useGetPhotosQuery } from 'store/api/api';
import checkPhotoExistence from 'utils/checkPhotoExistence';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<TPhoto | null>(null);
  const { data: photos = [] } = useGetPhotosQuery();

  const handlePhotoClick = (photo: TPhoto) => () => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
    document.body.classList.add('modalOpen');
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('modalOpen');
  };

  useEffect(() => {
    checkPhotoExistence(photos, selectedPhoto, setSelectedPhoto);
  }, [selectedPhoto, photos]);

  return (
    <GalleryStyled>
      <Photos>
        {photos.map((photo) => (
          <Photo key={photo._id} onClick={handlePhotoClick(photo)}>
            <Img src={photo.url} alt='photo' />
          </Photo>
        ))}
      </Photos>
      {selectedPhoto && lightboxOpen && (
        <LightBox photo={selectedPhoto} onClose={closeLightbox} />
      )}
    </GalleryStyled>
  );
};

export default Gallery;
