import { Sequelize, DataTypes, Model } from 'sequelize';
import { Theme } from '@/interfaces/themes.interface';

export class ThemesModel extends Model<Theme> implements Theme {
  id: string;
  title: string;
  dark: boolean;
  background_default: string;
  background_paper: string;
  text_primary: string;
  text_secondary: string;
  text_disabled: string;
  text_hint: string;
  primary_main: string;
  primary_light: string;
  primary_dark: string;
  primary_contrast: string;
  secondary_main: string;
  secondary_light: string;
  secondary_dark: string;
  secondary_contrast: string;
  error_main: string;
  error_light: string;
  error_dark: string;
  error_contrast: string;
  success_main: string;
  success_light: string;
  success_dark: string;
  success_contrast: string;
}

export default function (sequelize: Sequelize): typeof ThemesModel {
  ThemesModel.init(
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
      dark: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      background_default: {
        type: DataTypes.STRING,
        defaultValue: '#fafafa',
      },
      background_paper: {
        type: DataTypes.STRING,
        defaultValue: '#fff',
      },
      text_primary: {
        type: DataTypes.STRING,
        defaultValue: '#000000dd',
      },
      text_secondary: {
        type: DataTypes.STRING,
        defaultValue: '#00000089',
      },
      text_disabled: {
        type: DataTypes.STRING,
        defaultValue: '#00000060',
      },
      text_hint: {
        type: DataTypes.STRING,
        defaultValue: '#00000060',
      },
      primary_main: {
        type: DataTypes.STRING,
        defaultValue: '#3f51b5',
      },
      primary_light: {
        type: DataTypes.STRING,
        defaultValue: '#6573C3',
      },
      primary_dark: {
        type: DataTypes.STRING,
        defaultValue: '#2C387E',
      },
      primary_contrast: {
        type: DataTypes.STRING,
        defaultValue: '#fff',
      },
      secondary_main: {
        type: DataTypes.STRING,
        defaultValue: '#f50057',
      },
      secondary_light: {
        type: DataTypes.STRING,
        defaultValue: '#F73378',
      },
      secondary_dark: {
        type: DataTypes.STRING,
        defaultValue: '#AB003C',
      },
      secondary_contrast: {
        type: DataTypes.STRING,
        defaultValue: '#fff',
      },
      error_main: {
        type: DataTypes.STRING,
        defaultValue: '#f44336',
      },
      error_light: {
        type: DataTypes.STRING,
        defaultValue: '#e57373',
      },
      error_dark: {
        type: DataTypes.STRING,
        defaultValue: '#d32f2f',
      },
      error_contrast: {
        type: DataTypes.STRING,
        defaultValue: '#fff',
      },
      success_main: {
        type: DataTypes.STRING,
        defaultValue: '#4caf50',
      },
      success_light: {
        type: DataTypes.STRING,
        defaultValue: '#81c784',
      },
      success_dark: {
        type: DataTypes.STRING,
        defaultValue: '#388e3c',
      },
      success_contrast: {
        type: DataTypes.STRING,
        defaultValue: '#fff',
      },
    },
    {
      tableName: 'themes',
      sequelize,
    },
  );

  return ThemesModel;
}
