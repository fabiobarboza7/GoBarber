import { Router } from "express";

const routes = new Router();

routes.get("/", (requ, res) => {
  return res.json({ message: "Fábio" });
});

export default routes;
