import DB from '@databases';
import {
  EmptyBodyException,
  HttpException,
  MissingFieldException,
  MissingIdException,
  NotFoundDeleteException,
  NotFoundUpdateException,
  RessourceNotFoundException,
} from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

export abstract class CRUDService {
  public model: string;
  public required_keys?: string[] = [];
  public unique_keys?: string[] = [];
  public include?: { as: string; model: any; include?: object[] }[] = [];

  constructor(model: string) {
    this.model = model;
  }

  public async findAll(): Promise<any[]> {
    const items: any[] = await DB[this.model].findAll({
      raw: false,
      nest: true,
      include: this.include,
    });
    return items;
  }

  public async create(data: any): Promise<any> {
    if (isEmpty(data)) throw new EmptyBodyException();

    const missing_keys = [];
    for (const key of this.required_keys) {
      if (isEmpty(data[key])) {
        missing_keys.push(key);
      }
    }
    if (missing_keys.length) throw new MissingFieldException(missing_keys);

    const where = {};
    for (const key of this.unique_keys) {
      where[key] = data[key];
    }
    const check: any = await DB[this.model].findOne({
      where: where,
    });
    if (check) throw new HttpException(409, `Can't create this ressource because it already exist`);

    const item: any = await DB[this.model].create(data);
    return item;
  }

  public async destroy(id: string): Promise<void> {
    if (isEmpty(id)) throw new MissingIdException();

    const count = await DB[this.model].destroy({ where: { id: id } });
    if (count < 1) throw new NotFoundDeleteException();
  }

  public async update(id: string, data: any): Promise<void> {
    const [affectedCount] = await DB[this.model].update(data, {
      where: {
        id: id,
      },
    });

    if (affectedCount < 1) throw new NotFoundUpdateException();
  }

  public async findById(id: string): Promise<any> {
    if (isEmpty(id)) throw new EmptyBodyException();

    const item = await DB[this.model].findOne({
      where: {
        id: id,
      },
    });
    if (!item) throw new RessourceNotFoundException();

    return item;
  }
}
