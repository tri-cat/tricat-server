import DB from '@/databases';
import { Provider } from '@/interfaces/providers.interface';
import { CRUDService } from '.';

class PagesService extends CRUDService {
  constructor() {
    super('Pages');
    this.unique_keys = ['slug', 'website_id'];
    this.required_keys = ['title', 'slug', 'website_id'];
    this.include = [
      {
        model: DB.Websites,
        as: 'website',
      },
    ];
  }

  async getProvidersByPageId(page_id: string): Promise<Provider[]> {
    const items: Provider[] = await DB.Providers.findAll({
      raw: false,
      nest: true,
      where: {
        page_id: page_id,
      },
      include: [
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
      ],
    });

    return items;
  }
}

export default PagesService;
