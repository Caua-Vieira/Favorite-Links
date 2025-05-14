import express from "express";
import { FavoriteLinksController } from "./controllers/favoriteLinksController";
import { Container } from "typescript-ioc";
import { favoriteLinksRouter } from "./routes/favoriteLinksRoutes";
import { errorHandler } from "./middleware/errorHandler";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
app.use(express.json());

const favoriteLinksController = Container.get(FavoriteLinksController);
const swaggerDocument = YAML.load('./swagger.yaml');

app.use("/api/favorite-links", favoriteLinksRouter(favoriteLinksController));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

export default app;
