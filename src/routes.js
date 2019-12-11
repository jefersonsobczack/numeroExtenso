import { Router } from "express";

import ExtensoController from "./controllers/ExtensoController";

const routes = new Router();

routes.get("/:number", ExtensoController.search);

export default routes;
