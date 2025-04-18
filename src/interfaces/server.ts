import express from "express";
import { FavoriteLinksController } from "./controller/favoriteLinksController";
import { Container } from "typescript-ioc";
import { favoriteLinksRouter } from "./routes/favoriteLinksRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

const favoriteLinksController = Container.get(FavoriteLinksController);

app.use("/api/favorite-links", favoriteLinksRouter(favoriteLinksController));

app.use(errorHandler);

export default app;
