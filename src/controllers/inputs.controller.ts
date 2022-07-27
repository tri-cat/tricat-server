import { CRUDController } from '.';
import InputsService from '@/services/inputs.service';

class InputsController extends CRUDController {
  public service = new InputsService();
}

export default InputsController;
