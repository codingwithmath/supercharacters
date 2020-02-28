import { DataTypes, Model } from 'sequelize';

class Hero extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'heroes',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.City, { foreignKey: 'hero_id', as: 'city' });
    this.belongsToMany(models.Power, {
      foreignKey: 'hero_id',
      through: 'hero_powers',
      as: 'powers',
    });
  }
}

export default Hero;
