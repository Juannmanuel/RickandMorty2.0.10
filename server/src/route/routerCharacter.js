const { Router } = require("express")
const routerCharacter = Router()
const { getAllCharacters, getCharacterByName, getCharacterById } =  require("../controllers/controllersCharacter")


routerCharacter.get("/", getAllCharacters )
routerCharacter.get("/name", getCharacterByName)
routerCharacter.get("/:id", getCharacterById)



module.exports = routerCharacter;