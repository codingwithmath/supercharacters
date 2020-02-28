import Sequelize from 'sequelize';

import Hero from '../models/Hero';
import City from '../models/City';
import Power from '../models/Power';

import databaseConfig from '../config/database';

const models = [Hero, City, Power];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    Hero.associate(this.connection.models);
    City.associate(this.connection.models);
    Power.associate(this.connection.models);
  }
}

export default new Database();
