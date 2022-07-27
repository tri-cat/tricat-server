import ProvidersController from '@/controllers/providers.controller';
import { CRUDRouter } from '@routes/index';

class ProvidersRoute extends CRUDRouter {
  constructor() {
    super('/providers', new ProvidersController());
  }
}

export default ProvidersRoute;
