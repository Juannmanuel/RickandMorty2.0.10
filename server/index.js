const server = require("./src/server")
const PORT = 3001
const { conn, Character, Episode } = require("./src/db");
const { default: axios } = require("axios");

function getIdFromUrl(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
}


conn.sync({ force: false }).then(() => {

    server.listen(PORT, async () => {
        const fullDBCharacter = await Character.findAll()
        const episodeDB = await Episode.findAll()
        if (!fullDBCharacter.length) {
            const fulledDatabase = async () => {
                try {
                    for (let i = 1; i < 43; i++) {

                        const char = await axios.get(
                            `https://rickandmortyapi.com/api/character?page=${i}`
                        );
                        const charactersdb = char.data.results;
                        for (const iterator of charactersdb) {
                            const createdChar = await Character.create({
                                id: iterator.id,
                                name: iterator.name,
                                origin: iterator.origin.name,
                                status: iterator.status,
                                gender: iterator.gender,
                                image: iterator.image,
                                species: iterator.species,
                            });
                            for (const episodeUrl of iterator.episode) {
                                const episodeID = getIdFromUrl(episodeUrl);
                                const episode = await Episode.findByPk(episodeID);
                                if (episode) {
                                    await createdChar.addEpisode(episode);
                                }
                            }
                        }
                    }

                    if (!episodeDB.length) {
                        for (let i = 1; i < 4; i++) {

                            const response = await axios.get(
                                `https://rickandmortyapi.com/api/episode?page=${i}`
                            );
                            const episodes = response.data.results;
                            for (const iterator of episodes) {
                                const createdEpisode = await Episode.create({
                                    id: iterator.id,
                                    name: iterator.name,
                                    air_date: iterator.air_date,
                                    episode: iterator.episode
                                });
                                for (const characterURL of iterator.characters) {
                                    const characterID = getIdFromUrl(characterURL);
                                    const character = await Character.findByPk(characterID);
                                    if (character) {
                                        await createdEpisode.addCharacter(character);
                                    }
                                }
                            }

                        }

                    }

                    console.log("Base de datos poblada con éxito.");
                } catch (error) {
                    console.error(error);
                }
            };
            fulledDatabase();
        }

        console.log("databaseok!");
    })
})
