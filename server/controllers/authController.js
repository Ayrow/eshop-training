import User from '../models/User.js';

const register = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    throw new Error('please provide all values');
  }
  const user = await User.create({ email, password });
  const token = await user.createJWT();

  res.status(200).json({ user: user.email, token });
};

const login = async (req, res) => {
  res.status(200).json({});
};

export { register, login };
