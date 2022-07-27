import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

export class CRUDRouter implements Routes {
  public router = Router();
  public path = '/';
  public controller = null;

  constructor(path: string, controller: any) {
    this.path = path;
    this.controller = controller;
    this.initializeRoutes();
  }

  protected initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getById);
    this.router.post(`${this.path}`, this.controller.create);
    this.router.delete(`${this.path}/:id`, this.controller.destroy);
    this.router.patch(`${this.path}/:id`, this.controller.update);
    this.router.put(`${this.path}/:id`, this.controller.update);
  }
}
