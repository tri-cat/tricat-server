import { Sequelize, DataTypes, Model } from 'sequelize';
import { Team } from '@/interfaces/teams.interface';

export class TeamsModel extends Model<Team> implements Team {
  id: string;
  title: string;
  privilege: string;
  website_id: string;
}

export default function (sequelize: Sequelize): typeof TeamsModel {
  TeamsModel.init(
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
      privilege: {
        type: DataTypes.STRING(4),
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
      tableName: 'teams',
      sequelize,
    },
  );

  return TeamsModel;
}
