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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials');
  }

  const token = await user.createJWT();
  user.password = undefined;
  res.status(200).json({ user: user.email, token });
};

export { register, login };
