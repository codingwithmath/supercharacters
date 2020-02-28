import Hero from '../models/Hero';
import City from '../models/City';

class CityController {
  async index(req, res) {
    const { hero_id } = req.params;

    const hero = await Hero.findByPk(hero_id, {
      include: { association: 'city' },
    });

    return res.json(hero);
  }

  async store(req, res) {
    const { hero_id } = req.params;

    const { name } = req.body;

    const hero = await Hero.findByPk(hero_id);

    if (!hero) {
      return res.status(400).json({ error: 'Hero not found' });
    }

    const city = await City.create({
      name,
      hero_id,
    });

    return res.json(city);
  }
}

export default new CityController();
