import { hash } from 'bcrypt';
import DB from '@databases';
import {
  EmptyBodyException,
  HttpException,
  MissingFieldException,
  NotFoundUpdateException,
  RessourceNotFoundException,
} from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { CRUDService } from '.';

class UserService extends CRUDService {
  constructor() {
    super('Users');
  }

  public async findAll(): Promise<User[]> {
    const allUser: User[] = await DB.Users.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return allUser;
  }

  public async findById(id: string): Promise<User> {
    if (isEmpty(id)) throw new EmptyBodyException();

    const findUser: User = await DB.Users.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ['password'],
      },
    });
    if (!findUser) throw new RessourceNotFoundException();

    return findUser;
  }

  public async create(data: any): Promise<User> {
    if (isEmpty(data)) throw new EmptyBodyException();

    const findUser: User = await DB.Users.findOne({ where: { email: data.email } });
    if (findUser) throw new HttpException(409, `You're email ${data.email} already exists`);

    if (isEmpty(data.password)) throw new MissingFieldException(['password']);
    if (isEmpty(data.email)) throw new MissingFieldException(['email']);

    const hashedPassword = await hash(data.password, 10);
    const createUserData: User = await DB.Users.create({ ...data, password: hashedPassword });
    return createUserData;
  }

  public async update(id: string, data: any): Promise<void> {
    if (isEmpty(data)) throw new EmptyBodyException();

    if (data.password) {
      const password = await hash(data.password, 10);
      data.password = password;
    }

    const [affectedCount] = await DB.Users.update(data, {
      where: {
        id: id,
      },
    });

    if (affectedCount < 1) throw new NotFoundUpdateException();
  }
}

export default UserService;
