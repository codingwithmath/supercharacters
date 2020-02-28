import { Router } from 'express';

import HeroController from './controllers/Hero';
import CityController from './controllers/City';
import PowerController from './controllers/Power';

const routes = new Router();

routes.post('/hero', HeroController.store);
routes.get('/hero', HeroController.show);

routes.post('/hero/:hero_id/cities', CityController.store);
routes.get('/hero/:hero_id/cities', CityController.index);

routes.post('/hero/:hero_id/power', PowerController.store);
routes.get('/hero/:hero_id/power', PowerController.index);

export default routes;
