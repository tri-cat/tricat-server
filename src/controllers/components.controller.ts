import ComponentsService from '@/services/components.service';
import { CRUDController } from '.';

class ComponentsController extends CRUDController {
  public service = new ComponentsService();
}

export default ComponentsController;
