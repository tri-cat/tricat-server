import { Router } from 'express';
import WebsitesController from '@controllers/websites.controller';
import { Routes } from '@interfaces/routes.interface';

class WebsitesRoute implements Routes {
  public path = '/websites';
  public router = Router();
  public controller = new WebsitesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getById);
    this.router.post(`${this.path}`, this.controller.create);
    this.router.delete(`${this.path}/:id`, this.controller.destroy);
    this.router.patch(`${this.path}/:id`, this.controller.update);
    this.router.put(`${this.path}/:id`, this.controller.update);
  }
}

export default WebsitesRoute;
