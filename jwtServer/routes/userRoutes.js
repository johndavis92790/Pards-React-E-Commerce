const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const User = require('../models/user');

router.post('/register', async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  })
  const result = await user.save()
  const { password, ...data } = await result.toJSON(0)
  res.send(data)
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(404).send({
      message: "User not found"
    })
  }
  if (!await bcrypt.compare(req.body.password, user.password)) {
    return res.status(400).send({
      message: "Invalid password"
    })
  }
  const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  })
  res.send({
    message: 'Successful login'
  })

});

router.get('/user', async (req, res) => {
  try {
    const cookie = req.cookies['jwt'];
    const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
    if (!claims) {
      return res.status(401).send({
        message: "Unauthenticated"
      })
    }
    const user = await User.findOne({ _id: claims._id });

    const { password, ...data } = await user.toJSON();

    res.send(data)
  } catch (err) {
    return res.status(401).send({
      message: "Unauthenticated"
    })
  }
  
})

router.post('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: 0 })
  res.send({
    message: 'Successfully logged out'
  })
})

module.exports = router;