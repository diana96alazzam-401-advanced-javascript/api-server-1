'use strict';
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  category: { type: String, required: true },  
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('productSchema', productSchema);
