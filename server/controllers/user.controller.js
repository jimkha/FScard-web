const jwt = require('jsonwebtoken');

//Model
const User = require('../models/User');

const controller = {};

//LOADUSER
controller.loadUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

//LOGIN
controller.login = async (req, res) => {
  try {
    const idGG = req.user.idGG;
    const email = req.user.email;
    const name = req.user.name;

    //Check if user exists
    let user = await User.findOne({ idGG: idGG });

    if (!user) {
      user = new User({ idGG, email, name });
      await user.save();
    }
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      },
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = controller;
