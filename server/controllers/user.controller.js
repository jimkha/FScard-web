//Model
const User = require('../models/User');

const controller = {};

controller.loadUser = async (req, res) => {
  try {
    const idGG = req.user.id;
    const email = req.user.email;
    const user = await User.find({ idGG: idGG });
    if (user.length !== 0) {
      res.json(user);
      return;
    }
    const newUser = new User({ idGG, email });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = controller;
