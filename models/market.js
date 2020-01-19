const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema({
  FMID: {
    type: Number
  },
  MarketName: {
    type: String
  },
  Website: {
    type: String
  },
  Facebook: {
    type: String
  },
  Twitter: {
    type: String
  },
  Youtube: {
    type: String
  },
  OtherMedia: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  County: {
    type: String
  },
  State: {
    type: String
  },
  zip: {
    type: Number
  },
  Season1Date: {
    type: String
  },
  Season1Time: {
    type: String
  },
  Season2Date: {
    type: String
  },
  Season2Time: {
    type: String
  },
  Season3Date: {
    type: String
  },
  Season3Time: {
    type: String
  },
  Season4Date: {
    type: String
  },
  Season4Time: {
    type: String
  },
  x: {
    type: String
  },
  y: {
    type: String
  },
  Location: {
    type: String
  },
  Credit: {
    type: String
  },
  WIC: {
    type: String
  },
  WICcash: {
    type: String
  },
  SFMNP: {
    type: String
  },
  SNAP: {
    type: String
  },
  Organic: {
    type: String
  },
  Bakedgoods: {
    type: String
  },
  Cheese: {
    type: String
  },
  Crafts: {
    type: String
  },
  Flowers: {
    type:  String
  },
  Eggs: {
    type:  String
  },
  Seafood: {
    type:  String
  },
  Herbs: {
    type:  String
  },
  Vegetables: {
    type:  String
  },
  Honey: {
    type:  String
  },
  Jams: {
    type:  String
  },
  Maple: {
    type:  String
  },
  Meat: {
    type:  String
  },
  Nursery: {
    type:  String
  },
  Nuts: {
    type: String
  },
  Plants: {
    type:  String
  },
  Poultry: {
    type:  String
  },
  Prepared: {
    type:  String
  },
  Soap: {
    type:  String
  },
  Trees: {
    type:  String
  },
  Wine: {
    type:  String
  },
  Coffee: {
    type:  String
  },
  Beans: {
    type:  String
  },
  Fruits: {
    type:  String
  },
  Grains: {
    type:  String
  },
  Juices: {
    type:  String
  },
  Mushrooms: {
    type:  String
  },
  PetFood: {
    type:  String
  },
  Tofu: {
    type:  String
  },
  WildHarvested: {
    type:  String
  },
  updateTime: {
    type: String
  },
}, {
  collection: 'farmer_market'
});


module.exports = mongoose.model('farmer_market', marketSchema)