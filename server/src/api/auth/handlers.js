import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../db/models/User.js';

const generateToken = (id, username) => {
  const payload = { id, username };
  const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
    expiresIn: '24h',
  });

  return token;
};

const registration = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  const candidate = await User.findOne({ username });
  ctx.assert(!candidate, 404, 'Пользователь с таким именем уже существует');

  const hashPassword = bcrypt.hashSync(password, 6);

  await User.create({ username, password: hashPassword });
  ctx.body = { message: 'Пользователь успешно зарегистрирован' };

  await next();
};

const login = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  const user = await User.findOne({ username });
  ctx.assert(user, 400, `Пользователь с именем ${username} не найден`);

  const validPassword = bcrypt.compareSync(password, user.password);
  ctx.assert(validPassword, 400, `Введен неверный пароль`);

  const token = generateToken(user._id, user.username);

  ctx.body = {
    token,
    user: {
      id: user._id,
      username: user.username,
    },
  };
  await next();
};

const auth = async (ctx, next) => {
  const authorizationHeader = ctx.request.headers.authorization;

  const userData = jwt.verify(
    authorizationHeader.split(' ')[1],
    process.env.SECRET_JWT_KEY
  );

  const foudedUser = await User.findOne({ _id: userData.id });

  const payload = {
    id: foudedUser._id,
    username: foudedUser.username,
  };

  const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
    expiresIn: '24h',
  });

  ctx.body = {
    token,
    user: {
      id: foudedUser._id,
      username: foudedUser.username,
    },
  };
  await next();
};

const authHandlers = {
  registration,
  login,
  auth,
};

export default authHandlers;
