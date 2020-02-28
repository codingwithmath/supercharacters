import Power from '../models/Power';
import Hero from '../models/Hero';

class PowerController {
  async index(req, res) {
    const { hero_id } = req.params;

    const hero = await Hero.findByPk(hero_id, {
      include: {
        association: 'powers',
        attributes: ['name'],
        through: {
          attributes: ['hero_id'],
        },
      },
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

    const [power] = await Power.findOrCreate({
      where: { name },
    });

    await hero.addPower(power);

    return res.json(power);
  }
}

export default new PowerController();
