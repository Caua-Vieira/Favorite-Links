import express from "express";
import { FavoriteLinksController } from "./controller/favoriteLinksController";
import { Container } from "typescript-ioc";
import { favoriteLinksRouter } from "./routes/favoriteLinksRoutes";

const app = express();
app.use(express.json());

const favoriteLinksController = Container.get(FavoriteLinksController);

app.use("/api/favorite-links", favoriteLinksRouter(favoriteLinksController));

export default app;
