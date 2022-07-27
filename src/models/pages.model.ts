import { Sequelize, DataTypes, Model } from 'sequelize';
import { Page } from '@/interfaces/pages.interface';

export class PageModel extends Model<Page> implements Page {
  public id: string;
  public title: string;
  public slug: string;
  public parent_id: string;
  public website_id: string;
}

export default function (sequelize: Sequelize): typeof PageModel {
  PageModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      parent_id: {
        type: DataTypes.UUID,
        references: {
          model: 'pages',
          key: 'id',
        },
        allowNull: true,
      },
      website_id: {
        type: DataTypes.UUID,
        references: {
          model: 'websites',
          key: 'id',
        },
      },
    },
    {
      tableName: 'pages',
      sequelize,
    },
  );

  return PageModel;
}
