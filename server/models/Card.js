const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: 'You must supply user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  facade: {
    title: {
      type: String,
    },
    hastag: [
      {
        name: { type: String, ref: 'Collection' },
      },
    ],
    example: {
      type: String,
    },
    audio: {
      type: String,
    },
    img: {
      type: String,
    },
    gif: {
      type: String,
    },
    idiom: {
      title: { type: String },
      another: [
        {
          name: { type: String },
          value: { type: String },
        },
      ],
    },
    relatedWord: [
      {
        name: { type: String },
      },
    ],
    another: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],
  },
  backside: {
    title: {
      type: String,
    },
    hastag: [
      {
        name: { type: String, ref: 'Collection' },
      },
    ],
    audio: {
      type: String,
    },
    img: {
      type: String,
    },
    gif: {
      type: String,
    },
    idiom: {
      title: { type: String },
      another: [
        {
          name: { type: String },
          value: { type: String },
        },
      ],
    },
    another: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],
  },
  likes: [
    {
      user: {
        type: String,
        ref: 'users',
      },
    },
  ],
});

module.exports = mongoose.model('Card', cardSchema, 'Card');
