import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeader = req.headers;

  console.log('authHeader', authHeader);

  // if (!authHeader || !authHeader.startsWith('Bearer')) {
  //   throw new Error('Authentication invalid');
  // }

  // const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    // throw new Error('Authentication Invalid');
  }
};

export default auth;