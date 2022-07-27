import { Sequelize, DataTypes, Model } from 'sequelize';
import { User } from '@interfaces/users.interface';

export class UserModel extends Model<User> implements User {
  public id: string;
  public email: string;
  public password: string;
  public role: string;
  public first_name: string;
  public last_name: string;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
