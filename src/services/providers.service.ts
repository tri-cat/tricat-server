import DB from '@/databases';
import { CRUDService } from '.';

class ProvidersService extends CRUDService {
  constructor() {
    super('Providers');
    this.required_keys = ['page_id', 'component_id'];
    this.unique_keys = ['order', 'component_id'];
    this.include = [
      {
        model: DB.Pages,
        as: 'page',
      },
      {
        model: DB.Styles,
        as: 'style',
      },
      {
        model: DB.Components,
        as: 'component',
        include: [
          {
            model: DB.Inputs,
            as: 'inputs',
          },
        ],
      },
    ];
  }
}

export default ProvidersService;
