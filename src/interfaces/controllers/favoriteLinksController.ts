import { Inject, Singleton } from "typescript-ioc";
import { CreateFavoriteLinksUseCase } from "../../application/createFavoriteLinkUseCase";
import { Request, Response } from "express";
import { GetAllFavoriteLinksUseCase } from "../../application/getAllFavoriteLinkUseCase";
import { DeleteFavoriteLinksUseCase } from "../../application/deleteFavoriteLinkUseCase";
import { UpdateFavoriteLinksUseCase } from "../../application/updateFavoriteLinkUseCase";

@Singleton
export class FavoriteLinksController {
    constructor(
        @Inject private createUseCase: CreateFavoriteLinksUseCase,
        @Inject private getAllUseCase: GetAllFavoriteLinksUseCase,
        @Inject private deleteUseCase: DeleteFavoriteLinksUseCase,
        @Inject private updateUseCase: UpdateFavoriteLinksUseCase,
    ) { }

    async create(req: Request, res: Response) {
        const newLink = await this.createUseCase.execute(req.body);
        res.status(201).json(newLink);
    }

    async getAll(res: Response) {
        const links = await this.getAllUseCase.execute();
        res.json(links);
    }

    async deleteLink(req: Request, res: Response) {
        const { id } = req.params;
        await this.deleteUseCase.execute(Number(id));
        res.status(204).send({ message: 'Excluído com sucesso' });
    }

    async updateLink(req: Request, res: Response) {
        const linkData = {
            ...req.body,
            id: req.params.id
        }
        const updatedLink = await this.updateUseCase.execute(linkData);
        res.status(200).json(updatedLink);
    }
}
