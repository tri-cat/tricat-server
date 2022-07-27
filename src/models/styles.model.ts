import { Sequelize, DataTypes, Model } from 'sequelize';
import { Style } from '@/interfaces/styles.interface';

export class StyleModel extends Model<Style> implements Style {
  id: string;
  component_id: string;
  path: string;
  title: string;
  default: boolean;
  author_id: string;
  public: boolean;
  website_id: string;
}

export default function (sequelize: Sequelize): typeof StyleModel {
  StyleModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      component_id: {
        type: DataTypes.UUID,
        references: {
          model: 'components',
          key: 'id',
        },
      },
      author_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      public: {
        type: DataTypes.BOOLEAN,
      },
      website_id: {
        type: DataTypes.UUID,
        references: {
          model: 'websites',
          key: 'id',
        },
        allowNull: true,
      },
    },
    {
      tableName: 'styles',
      sequelize,
    },
  );

  return StyleModel;
}
