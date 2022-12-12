import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    console.log('error', error);
    // throw new Error('Authentication invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    console.log('error', error);
    // throw new Error('Authentication Invalid');
  }
};

export default auth;
