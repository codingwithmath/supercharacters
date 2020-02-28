import { DataTypes, Model } from 'sequelize';

class Power extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'powers',
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Hero, {
      foreignKey: 'power_id',
      through: 'hero_powers',
      as: 'heroes',
    });
  }
}

export default Power;
