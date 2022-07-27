import { NextFunction, Request, Response } from 'express';

export abstract class CRUDController {
  public service?: any;

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items: any[] = await this.service.findAll();

      res.status(200).json({ data: items, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await this.service.findById(req.params.id);

      res.status(200).json({ data: item, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createUserData = await this.service.create(req.body);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.update(req.params.id, req.body);

      res.status(200).json({ message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.destroy(req.params.id);

      res.status(200).json({ message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
