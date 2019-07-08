import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

import config from "./config";

import cors from "cors";
import TwitchConnector from "./modules/TwitchConnector";
import settings from "./settings";
export const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.json({
    message: "init endpoints from node"
  });
});

app.get("/api/auth", (req, res) => {
  const twitchElement = new TwitchConnector({
    clientId: settings.auth.clientId,
    clientSecret: settings.auth.clientSecret,
    grantType: settings.auth.grantType,
    scope: settings.auth.scope
  });

  twitchElement
    .getAccessToken()
    .then(response => {
      res.json({
        data: response.data
      });
    })
    .catch(error => {
      console.log("ERROR-------", error);
    });
});

export const start = () => {
  app.listen(config.port, () => {
    console.log(`REST API on http://localhost:${config.port}/api`);
  });
};
