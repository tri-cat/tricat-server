import { CRUDService } from '.';

class InputsService extends CRUDService {
  constructor() {
    super('Inputs');
    this.unique_keys = ['component_id', 'key'];
    this.required_keys = ['component_id', 'title', 'key'];
  }
}

export default InputsService;
