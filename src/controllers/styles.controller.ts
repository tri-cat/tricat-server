import { CRUDController } from '.';
import StylesService from '@/services/styles.service';

class StylesController extends CRUDController {
  public service = new StylesService();
}

export default StylesController;
