module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('powers', {
      id: {
        type: Sequelize.INTEGER,
        primeryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('powers');
  },
};
