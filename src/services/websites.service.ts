import { UserModel } from '@/models/users.model';
import { CRUDService } from '.';

class WebsitesService extends CRUDService {
  constructor() {
    super('Websites');
    this.unique_keys = ['title', 'user_id'];
    this.include = [
      {
        model: UserModel,
        as: 'user',
      },
    ];
  }
}

export default WebsitesService;
