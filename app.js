const mongoose = require("mongoose");
const { GraphQLServer } = require("graphql-yoga");
const Market = require("./models/market");
const dotenv = require("dotenv");

try {
  dotenv.config();
} catch (error) {
  console.log(error.message);
}

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const typeDefs = `
type Market {
    _id: ID
    FMID: Int
    MarketName: String
    Website: String
    Facebook: String
    Twitter: String
    Youtube: String
    OtherMedia: String
    street: String
    city: String
    County: String
    State: String
    zip: String
    Season1Date: String
    Season1Time: String
    Season2Date: String
    Season2Time: String
    Season3Date: String
    Season3Time: String
    Season4Date: String
    Season4Time: String
    x: Float
    y: Float
    Location: String
    Credit: String
    WIC: String
    WICcash: String
    SFMNP: String
    SNAP: String
    Organic: String
    Bakedgoods: String
    Cheese: String
    Crafts: String
    Flowers: String
    Eggs: String
    Seafood: String
    Herbs: String
    Vegetables: String
    Honey: String
    Jams: String
    Maple: String
    Meat: String
    Nursery: String
    Nuts: String
    Plants: String
    Poultry: String
    Prepared: String
    Soap: String
    Trees: String
    Wine: String
    Coffee: String
    Beans: String
    Fruits: String
    Grains: String
    Juices: String
    Mushrooms: String
    PetFood: String
    Tofu: String
    WildHarvested: String
    updateTime: String
  }
  type Query {
    marketZipCode(zipcode:String): [Market]
  }
`;
const resolvers = {
  Query: {
    marketZipCode: (_, { zipcode }) => Market.find({ zip: zipcode }).exec()
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");

  if ("OPTIONS" === req.method) {
    return res.send(200);
  } else {
    next();
  }
});

server.start(
  {
    port: process.env.PORT || 4000,
    cors: {
      origin: ["*"]
    }
  },
  () => console.log("Ensenada is running! 🐡⛱ \n")
);
