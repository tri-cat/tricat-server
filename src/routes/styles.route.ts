import { CRUDRouter } from '@routes/index';
import StylesController from '@/controllers/styles.controller';

class StylesRoute extends CRUDRouter {
  constructor() {
    super('/styles', new StylesController());
  }
}

export default StylesRoute;
