import Photo from '../../db/models/Photo.js';

const getPhotos = async (ctx, next) => {
  const photos = await Photo.find();

  ctx.body = photos;
  await next();
};

// const setPhotos = async (ctx, next) => {
//   const imageUrls = [
//     'http://localhost:5000/img-1.jpg',
//     'http://localhost:5000/img-2.jpg',
//     'http://localhost:5000/img-3.jpg',
//     'http://localhost:5000/img-4.jpg',
//     'http://localhost:5000/img-5.jpg',
//     'http://localhost:5000/img-6.jpg',
//     'http://localhost:5000/img-7.jpg',
//     'http://localhost:5000/img-8.jpg',
//     'http://localhost:5000/img-9.jpg',
//     'http://localhost:5000/img-10.jpg',
//   ];

//   const photos = imageUrls.map((url) => ({
//     url,
//     comments: [],
//   }));

//   await Photo.insertMany(photos);

//   ctx.body = 'e';
//   await next();
// };

const photosHandlers = {
  getPhotos,
};

export default photosHandlers;
