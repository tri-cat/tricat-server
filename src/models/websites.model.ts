import { Sequelize, DataTypes, Model } from 'sequelize';
import { Website } from '@/interfaces/websites.interface';

export class WebsiteModel extends Model<Website> implements Website {
  public id: string;
  public title: string;
  public template: boolean;
  public theme_id: string;
  public user_id: string;
}

export default function (sequelize: Sequelize): typeof WebsiteModel {
  WebsiteModel.init(
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
      template: {
        type: DataTypes.BOOLEAN,
      },
      theme_id: {
        type: DataTypes.UUID,
        references: {
          model: 'themes',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    },
    {
      tableName: 'websites',
      sequelize,
    },
  );

  return WebsiteModel;
}
