import { Settings, APIConnector } from '../base';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  static get endpoint() {
    return `${Settings.apiRestEndpoint}`;
  }

  static get getExample() {
    return `${ServiceConfig.endpoint}/endpointExample`;
  }

  static get APIConnector() {
    return apiConnector;
  }
}
