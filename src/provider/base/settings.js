import { URL_API } from '../../config';

let _env = 'LC';
class Settings {
  static get apiRestEndpoint() {
    switch (_env) {
      case 'PROD':
        return '';
      case 'ST':
        return '';
      case 'DV':
        return '';
      case 'LC':
        return URL_API;
      default:
        return URL_API;
    }
  }

  static get environment() {
    return _env;
  }
}

module.exports = Settings;
