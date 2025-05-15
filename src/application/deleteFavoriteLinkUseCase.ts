import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";
import { IFavoriteLinks } from "../domain/types/favoriteLinksInterface";
import { NotFoundException } from "../domain/errors/errors";

export class DeleteFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute(id: number) {
        const result = await this.repository.delete(id);

        if (!result) {
            throw new NotFoundException("Não há links cadastrados");
        }
    }
}