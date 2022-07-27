import { Sequelize, DataTypes, Model } from 'sequelize';
import { Pattern } from '@/interfaces/patterns.interface';

export class PatternModel extends Model<Pattern> implements Pattern {
  id: string;
  title: string;
  description: string;
  image_id: string;
}

export default function (sequelize: Sequelize): typeof PatternModel {
  PatternModel.init(
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
      description: {
        type: DataTypes.STRING,
      },
      image_id: {
        type: DataTypes.UUID,
        references: {
          model: 'files',
          key: 'id',
        },
        allowNull: true,
      },
    },
    {
      tableName: 'patterns',
      sequelize,
    },
  );

  return PatternModel;
}
