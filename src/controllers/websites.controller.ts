import { CRUDController } from '.';
import WebsitesService from '@services/websites.service';

class WebsitesController extends CRUDController {
  public service = new WebsitesService();
}

export default WebsitesController;
