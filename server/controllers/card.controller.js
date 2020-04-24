const { validationResult } = require('express-validator');
const { ObjectId } = require('mongodb');
const moment = require('moment');

//MODELS
const Card = require('../models/Card');

const controller = {};

//Get all cards by user id
controller.getAll = async (req, res) => {
  try {
    let cards = await Card.find({ user: req.user.id });
    const currentDate = moment().format('MM-DD-YYYY');

    switch (req.params.mode) {
      case 'today':
        cards = cards.filter(
          (card) => moment(card.date).format('MM-DD-YYYY') === currentDate,
        );
        break;
      case 'week':
        cards = cards.filter((card) => {
          const dateOfCard = moment(card.date).format('MM-DD-YYYY');
          return (
            // 604800000 is 1 week interval
            new Date(currentDate).getTime() - new Date(dateOfCard).getTime() <=
            604800000
          );
        });
        break;
    }
    res.json(cards);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = controller;
