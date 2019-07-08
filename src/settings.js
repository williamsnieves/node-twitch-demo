const dotenv = require("dotenv");
dotenv.config();
export default {
  services: {
    baseAuthUrl: "https://id.twitch.tv/oauth2/token"
  },
  auth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    grantType: "client_credentials",
    scope: "viewing_activity_read"
  }
};
