const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

module.exports = async (req, res, next) => {
  const token = req.params.token;
  // Check if not token
  if (!token || token === 'undefined') {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    req.user = {};
    req.user.idGG = payload['sub'];
    req.user.email = payload['email'];
    req.user.name = payload['name'];
    req.user.picture = payload['picture'];
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
