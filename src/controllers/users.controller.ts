import userService from '@services/users.service';
import { CRUDController } from '.';

class UsersController extends CRUDController {
  public service = new userService();
}

export default UsersController;
