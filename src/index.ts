import express from "express";
import morgan from "morgan";
import cors from "cors";

import { DownloadRoutes } from "../src/routes";

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.router();
  }
  private config(): void {
    //setting
    this.app.set("port", 8080);
    //middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors(options));
    this.app.use(express.urlencoded({ extended: true }));
  }
  private router(): void {
    this.app.use(`/api`, DownloadRoutes);
  }
  async start() {
    await this.app.listen(this.app.get("port"), () => {
      console.log(`App listening on port ${this.app.get("port")}!`);
    });
  }
}

const server = new Server();
server.start();
