import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import WebsiteModel from '@/models/websites.model';
import relations from './relations';
import PageModel from '@/models/pages.model';
import ComponentModel from '@/models/components.model';
import FileModel from '@/models/files.model';
import InputModel from '@/models/inputs.model';
import StyleModel from '@/models/styles.model';
import PatternModel from '@/models/patterns.model';
import LanguageModel from '@/models/languages.model';
import ProvidersModel from '@/models/providers.model';
import PatternStylesModel from '@/models/patterns_styles.model';
import TeamsModel from '@/models/teams.model';
import TeamsProvidersModel from '@/models/teams_providers.model';
import TeamsUsersModel from '@/models/teams_users.model';
import ValuesModel from '@/models/values.model';
import ThemesModel from '@/models/themes.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    //logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Themes: ThemesModel(sequelize),
  Websites: WebsiteModel(sequelize),
  Pages: PageModel(sequelize),
  Components: ComponentModel(sequelize),
  Files: FileModel(sequelize),
  Styles: StyleModel(sequelize),
  Patterns: PatternModel(sequelize),
  Inputs: InputModel(sequelize),
  Languages: LanguageModel(sequelize),
  Providers: ProvidersModel(sequelize),
  PatternsStyles: PatternStylesModel(sequelize),
  Teams: TeamsModel(sequelize),
  TeamsProviders: TeamsProvidersModel(sequelize),
  TeamsUsers: TeamsUsersModel(sequelize),
  Values: ValuesModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

relations(DB);

export default DB;
