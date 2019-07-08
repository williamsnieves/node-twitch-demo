import settings from "../settings";
import queryString from "query-string";
import axios from "axios";
class TwitchConnector {
  constructor({ clientId, clientSecret, grantType, scope }) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.grantType = grantType;
    this.scope = scope;
    this.baseAuthUrl = settings.services.baseAuthUrl;
  }

  getAccessToken() {
    const parametersAuth = queryString.stringify({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: this.grantType,
      scope: this.scope
    });

    const tokenURL = `${this.baseAuthUrl}?${parametersAuth}`;
    return axios({
      method: "POST",

      url: tokenURL,

      headers: {
        accept: "application/json"
      }
    });
  }
}

export default TwitchConnector;
