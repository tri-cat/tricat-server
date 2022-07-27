import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import InputsController from '@/controllers/inputs.controller';

class InputsRoute implements Routes {
  public path = '/inputs';
  public router = Router();
  public controller = new InputsController();

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

export default InputsRoute;
