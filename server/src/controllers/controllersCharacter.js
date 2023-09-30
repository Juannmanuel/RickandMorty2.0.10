const { Character, Episode } = require("../db");
const { Op } = require("sequelize");

const getAllCharacters = async (req, res) => {
  try {
    const allCharacter = await Character.findAll();
    return res.status(200).json(allCharacter);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};
const getCharacterByName = async (req, res) => {
  const { name } = req.params;
  if (!name) throw Error("Debe ingresar un nombre");
  try {
    const characterByName = await Character.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${name}%` },  },
        ],
      },
      include: { model: Episode }
    });
    
    return res.status(200).json(characterByName);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
const getCharacterById = async (req, res) => {
  const { id } = req.params;
  if (!id) throw Error("Debe ingresar un id");
  try {
    const character = await Character.findOne({
      where: {id},
      include: [
        {
          model:Episode,
          attributes: ['id','name','air_date','episode'],
        }
      ]
    });
    if (!character) throw Error("No se encontro personaje con ese Id");
    return res.status(200).json(character);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCharacters,
  getCharacterByName,
  getCharacterById,
};
