import { Router } from "express";
import { FavoriteLinksController } from "../controllers/favoriteLinksController";

export const favoriteLinksRouter = (controller: FavoriteLinksController): Router => {
    const router = Router();

    router.post("/", (req, res) => controller.create(req, res));
    router.get("/", (req, res) => controller.getAll(res));
    router.put("/:id", (req, res) => controller.updateLink(req, res));
    router.delete("/:id", (req, res) => controller.deleteLink(req, res));

    return router;
};
