const {  DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Episode", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: DataTypes.STRING,
        air_date: DataTypes.STRING,
        episode: DataTypes.STRING

    }, {timestamps: false})
}


