import { Provider } from '@/interfaces/providers.interface';
import PagesService from '@/services/pages.service';
import { CRUDController } from '.';
import { NextFunction, Request, Response } from 'express';

class PagesController extends CRUDController {
  public service = new PagesService();

  public getProvidersByPageId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items: Provider[] = await this.service.getProvidersByPageId(req.params.id);

      res.status(200).json({ data: items, message: 'find providers by page id' });
    } catch (error) {
      next(error);
    }
  };
}

export default PagesController;
