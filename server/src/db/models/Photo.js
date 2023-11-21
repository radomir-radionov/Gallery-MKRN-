import { Schema, model } from 'mongoose';

const Photo = new Schema({
  url: {
    type: String,
    required: true,
  },
  comments: [
    {
      commentText: {
        type: String,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model('Photo', Photo);
