import Hero from '../models/Hero';

class HeroController {
  async show(req, res) {
    const heroes = await Hero.findAll();

    return res.json(heroes);
  }

  async store(req, res) {
    const { name } = req.body;

    const heroExist = await Hero.findOne({
      where: { name },
    });

    if (heroExist) {
      return res.status(400).json({ error: 'Hero already exist! ' });
    }

    const hero = await Hero.create({
      name,
    });

    return res.json(hero);
  }
}

export default new HeroController();
