module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        like: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.BOOLEAN,
        },

    });
    return Post
}