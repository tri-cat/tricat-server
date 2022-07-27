import { Sequelize, DataTypes, Model } from 'sequelize';
import { TeamUser } from '@/interfaces/teams_users.interface';

export class TeamsUsersModel extends Model<TeamUser> implements TeamUser {
  team_id: string;
  user_id: string;
}

export default function (sequelize: Sequelize): typeof TeamsUsersModel {
  TeamsUsersModel.init(
    {
      team_id: {
        type: DataTypes.UUID,
        references: {
          model: 'teams',
          key: 'id',
        },
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
        primaryKey: true,
      },
    },
    {
      tableName: 'teams_users',
      sequelize,
    },
  );

  return TeamsUsersModel;
}
