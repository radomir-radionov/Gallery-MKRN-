import pkg from 'mongoose';

const { Schema, model } = pkg;

const User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model('User', User);
