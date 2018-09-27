// Vendor
import ApolloClient from 'apollo-boost';

// Configurations
import {API_URL} from 'react-boilerplate/configurations/environment';

export class ApolloService {
  private _client = new ApolloClient({uri: API_URL});

  public get client() {
    return this._client;
  }
}

export default new ApolloService();
