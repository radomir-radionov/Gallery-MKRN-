import { TPhoto } from 'types/app';

const checkPhotoExistence = (
  photos: TPhoto[],
  selectedPhoto: TPhoto | null,
  setSelectedPhoto: (value: TPhoto | null) => void
) => {
  if (selectedPhoto) {
    const foundPhoto = photos.find((photo) => photo._id === selectedPhoto._id);

    if (foundPhoto) {
      const keysMatch = Object.keys(selectedPhoto).every(
        (key) =>
          foundPhoto[key as keyof TPhoto] === selectedPhoto[key as keyof TPhoto]
      );

      if (!keysMatch) setSelectedPhoto(foundPhoto);
    }
  }
};

export default checkPhotoExistence;
