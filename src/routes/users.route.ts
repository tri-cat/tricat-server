import { CRUDRouter } from '@routes/index';
import UsersController from '@/controllers/users.controller';

class UsersRoute extends CRUDRouter {
  constructor() {
    super('/users', new UsersController());
  }
}

export default UsersRoute;
