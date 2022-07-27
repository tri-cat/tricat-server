import { Sequelize, DataTypes, Model } from 'sequelize';
import { Value } from '@interfaces/values.interface';

export class ValueModel extends Model<Value> implements Value {
  id: string;
  provider_id: string;
  input_id: string;
  language_id: string;
  file_id: string;
  text: string;
  html: string;
  url: string;
  link: string;
  number: number;
  boolean: boolean;
}

export default function (sequelize: Sequelize): typeof ValueModel {
  ValueModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      provider_id: {
        type: DataTypes.UUID,
        references: {
          model: 'providers',
          key: 'id',
        },
        allowNull: false,
      },
      input_id: {
        type: DataTypes.UUID,
        references: {
          model: 'inputs',
          key: 'id',
        },
        allowNull: false,
      },
      language_id: {
        type: DataTypes.UUID,
        references: {
          model: 'languages',
          key: 'id',
        },
        allowNull: true,
      },
      file_id: {
        type: DataTypes.UUID,
        references: {
          model: 'files',
          key: 'id',
        },
        allowNull: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      html: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      number: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      boolean: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      link: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      tableName: 'values',
      sequelize,
    },
  );

  return ValueModel;
}
