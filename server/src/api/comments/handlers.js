import User from '../../db/models/User.js';
import Photo from '../../db/models/Photo.js';

const addComment = async (ctx, next) => {
  const { user, photoId, commentText } = ctx.request.body;

  const foundedUser = await User.findById(user.id);
  const photo = await Photo.findById(photoId);

  if (foundedUser && photo) {
    photo.comments.push({
      userId: foundedUser._id,
      username: foundedUser.username,
      commentText: commentText,
    });

    const updatedPhoto = await photo.save();
    ctx.body = updatedPhoto;
  }

  await next();
};

const deleteComment = async (ctx, next) => {
  const { id } = ctx.request.params;

  const updatedPhoto = await Photo.findOneAndUpdate(
    { 'comments._id': id },
    { $pull: { comments: { _id: id } } },
    { new: true }
  );
  ctx.assert(updatedPhoto, 404, `Комментарий не найден`);

  ctx.body = { message: 'Комментарий успешно удален' };
  await next();
};

const commentsHandlers = {
  addComment,
  deleteComment,
};

export default commentsHandlers;
