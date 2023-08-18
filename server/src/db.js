require("dotenv").config();
const { Sequelize } = require("sequelize");
const CharacterModel = require("./models/Characters")
const EpisodeModel = require("./models/Episode") 


const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty_2_0`, {
  logging: false,
  native: false,
});

CharacterModel(sequelize)
EpisodeModel(sequelize)

const { Character, Episode } = sequelize.models;


Character.belongsToMany(Episode, { through: 'CharacterEpisode', timestamps: false });
Episode.belongsToMany(Character, { through: 'CharacterEpisode', timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};