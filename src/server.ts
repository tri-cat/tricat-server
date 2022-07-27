import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import WebsitesRoute from '@routes/websites.route';
import ComponentsRoute from '@routes/components.route';
import PagesRoute from '@routes/pages.route';
import validateEnv from '@utils/validateEnv';
import ProvidersRoute from '@/routes/providers.route';
import InputsRoute from './routes/inputs.route';
import StylesRoute from './routes/styles.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new WebsitesRoute(),
  new PagesRoute(),
  new ComponentsRoute(),
  new ProvidersRoute(),
  new InputsRoute(),
  new StylesRoute(),
]);

app.listen();
