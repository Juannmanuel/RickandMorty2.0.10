const { Router } = require("express");
const router = Router()
const routerCharacter = require("./routerCharacter")
const routerEpisode = require("./routerEpisode")


router.use("/characters", routerCharacter)
router.use("/episodes", routerEpisode)



module.exports = router