import { Inject } from "typescript-ioc";
import { CreateFavoriteLinksUseCase } from "../application/createFavoriteLinkUseCase";
import { Request, Response } from "express";

export class FavoriteLinksController {
    constructor(
        @Inject
        private createUseCase: CreateFavoriteLinksUseCase
    ) { }

    async create(req: Request, res: Response) {
        const newLink = await this.createUseCase.execute(req.body);
        res.status(201).json(newLink)
    }
}