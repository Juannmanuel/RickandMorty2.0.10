const {Episode, Character} = require("../db")
const { Op } = require("sequelize");

const getAllEpisodes = async (req, res) => {
    try {
        const allEpisodes = await Episode.findAll()
        if(!allEpisodes) throw Error("No hay episodios")
        return res.status(200).json(allEpisodes)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getEpisodeById = async (req, res) => {
    const {id} = req.params;
    try {
        if(!id) throw Error("Debe ingresar un id valido")
        const episode = await Episode.findByPk(id, {include: Character});
        res.status(200).json(episode)
    } catch (error) {
        return res.status(400).send({"error": error.message})
    }
}

const getEpisodeBySeason = async (req, res) =>{
    const {season} = req.query
    if(!season) throw Error("No hay")
    try {
        const episodeBySeason = await Episode.findAll({
            where:{
                [Op.or]:[
                    {episode:{ [Op.iLike] : `${season}%`}}
                ]
            },
            include: Character
        })
        return res.status(200).json(episodeBySeason)
    } catch (error) {
        return res.status(400).send({"error": error.message})
    }
}

module.exports = {
    getAllEpisodes,
    getEpisodeById,
    getEpisodeBySeason
}