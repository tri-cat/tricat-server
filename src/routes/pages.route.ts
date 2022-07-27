import PagesController from '@controllers/pages.controller';
import { CRUDRouter } from '@routes/index';

class PagesRoute extends CRUDRouter {
  constructor() {
    super('/pages', new PagesController());
  }

  protected initializeRoutes() {
    super.initializeRoutes();
    this.router.get(`${this.path}/:id/providers`, this.controller.getProvidersByPageId);
  }
}

export default PagesRoute;
