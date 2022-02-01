import { Router } from "express";
import { DownloadController } from "../controllers";

const DownloadRoutes = {
  router: Router() as Router,
  routers: function (): void {
    this.router.route("/download").get(DownloadController.download);
  },
};
DownloadRoutes.routers();
export default DownloadRoutes.router;
