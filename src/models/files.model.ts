import { Sequelize, DataTypes, Model } from 'sequelize';
import { File } from '@/interfaces/files.interface';

export class FileModel extends Model<File> implements File {
  id: string;
  website_id: string;
  user_id: string;
  path: string;
  name: string;
  tags: string;
  mimetype: string;
  size: number;
}

export default function (sequelize: Sequelize): typeof FileModel {
  FileModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      website_id: {
        type: DataTypes.UUID,
        references: {
          model: 'websites',
          key: 'id',
        },
      },
      user_id: {
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
      mimetype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      tableName: 'files',
      sequelize,
    },
  );

  return FileModel;
}
