const { Router } = require("express")
const routerEpisode = Router()
const {getAllEpisodes, getEpisodeById, getEpisodeBySeason} = require("../controllers/controllersEpisode")

routerEpisode.get("/", getAllEpisodes)
routerEpisode.get("/season", getEpisodeBySeason)
routerEpisode.get("/:id", getEpisodeById)

module.exports = routerEpisode