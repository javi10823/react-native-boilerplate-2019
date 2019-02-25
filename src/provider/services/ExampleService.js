import ServiceConfig from './ExampleConfig';

export default class AppService {
  static getExample() {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = ServiceConfig.getExample;
        let response = await ServiceConfig.APIConnector.get(endpoint, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

}
