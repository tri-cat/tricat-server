import { Sequelize, DataTypes, Model } from 'sequelize';
import { Provider } from '@/interfaces/providers.interface';

export class ProvidersModel extends Model<Provider> implements Provider {
  id: string;
  page_id: string;
  component_id: string;
  order: number;
  style_id: string;
}

export default function (sequelize: Sequelize): typeof ProvidersModel {
  ProvidersModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      order: {
        type: DataTypes.DECIMAL,
        defaultValue: 1,
      },
      component_id: {
        type: DataTypes.UUID,
        references: {
          model: 'components',
          key: 'id',
        },
        allowNull: true,
      },
      page_id: {
        type: DataTypes.UUID,
        references: {
          model: 'pages',
          key: 'id',
        },
        allowNull: true,
      },
      style_id: {
        type: DataTypes.UUID,
        references: {
          model: 'styles',
          key: 'id',
        },
        allowNull: true,
      },
    },
    {
      tableName: 'providers',
      sequelize,
    },
  );

  return ProvidersModel;
}
