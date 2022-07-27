import { Sequelize, DataTypes, Model } from 'sequelize';
import { TeamProvider } from '@/interfaces/teams_providers.interface';

export class TeamsProvidersModel extends Model<TeamProvider> implements TeamProvider {
  team_id: string;
  provider_id: string;
}

export default function (sequelize: Sequelize): typeof TeamsProvidersModel {
  TeamsProvidersModel.init(
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
      provider_id: {
        type: DataTypes.UUID,
        references: {
          model: 'providers',
          key: 'id',
        },
        primaryKey: true,
      },
    },
    {
      tableName: 'teams_providers',
      sequelize,
    },
  );

  return TeamsProvidersModel;
}
