import { Sequelize, DataTypes, Model } from 'sequelize';
import { Input } from '@/interfaces/inputs.interface';

export class InputModel extends Model<Input> implements Input {
  id: string;
  title: string;
  key: string;
  type: string;
  parent_id: string;
  description: string;
  default_value: string;
  component_id: string;
  required: boolean;
}

export default function (sequelize: Sequelize): typeof InputModel {
  InputModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('text', 'html', 'image', 'icon', 'file', 'url', 'link', 'boolean', 'number', 'array', 'date'),
        defaultValue: 'text',
      },
      parent_id: {
        type: DataTypes.UUID,
        references: {
          model: 'inputs',
          key: 'id',
        },
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      default_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      component_id: {
        type: DataTypes.UUID,
        references: {
          model: 'components',
          key: 'id',
        },
        allowNull: false,
      },
      required: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'inputs',
      sequelize,
    },
  );

  return InputModel;
}
