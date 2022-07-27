import { CRUDService } from '.';
import DB from '@/databases';

class ComponentsService extends CRUDService {
  constructor() {
    super('Components');
    this.unique_keys = ['title', 'path'];
    this.required_keys = ['path'];
    this.include = [
      {
        model: DB.Inputs,
        as: 'inputs',
      },
    ];
  }
}

export default ComponentsService;
