import { DataTypes, Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'cities',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Hero, { foreignKey: 'hero_id', as: 'address' });
  }
}

export default City;
