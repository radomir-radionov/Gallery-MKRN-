import jwt from 'jsonwebtoken';

const jwtAuthenticater = async (ctx, next) => {
  const authorizationHeader = ctx.request.headers.authorization;
  ctx.assert(authorizationHeader, 401, 'Пользователь не авторизован');

  const token = authorizationHeader.split(' ')[1];
  ctx.assert(token, 401, 'Пользователь не авторизован');

  const decodedData = jwt.verify(token, process.env.SECRET_JWT_KEY);
  ctx.assert(decodedData, 401, 'Пользователь не авторизован');

  ctx.body = decodedData;
  await next();
};

export default jwtAuthenticater;
