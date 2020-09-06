// const { default: mongoose } = require("../database");

import mongoose from '../database/index.js';

const GradeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  subject: {
    type: String
  },
  type: {
    type: String,
  },
  value: {
    type: String
  },
  lastModified:{
    type: Date,
    default: new Date()
  }
});

const Grade = mongoose.model('grade', GradeSchema, 'grade');

export default Grade;