require('dotenv').config();

const express = require('express');
var cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API running'));
app.use(cors());

// Define Routes
app.use('/api/user', require('./routes/api/user.api'));
app.use('/api/cards', require('./routes/api/card.api'));
// app.use('/api/collections', require('./routes/api/collection.api'));

//Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   //Set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//ASK:
//1.Why use jstoken
