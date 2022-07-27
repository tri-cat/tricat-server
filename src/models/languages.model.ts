import { Sequelize, DataTypes, Model } from 'sequelize';
import { Language } from '@/interfaces/languages.interface';

export class LanguageModel extends Model<Language> implements Language {
  id: string;
  name: string;
  code: string;
  emoji: string;
}

export default function (sequelize: Sequelize): typeof LanguageModel {
  LanguageModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      emoji: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'languages',
      sequelize,
    },
  );

  return LanguageModel;
}
