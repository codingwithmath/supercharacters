module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hero_powers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      hero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'heroes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      power_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'powers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('hero_powers');
  },
};
