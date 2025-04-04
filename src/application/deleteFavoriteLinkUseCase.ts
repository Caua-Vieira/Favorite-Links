import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";
import { IFavoriteLinks } from "../domain/types/favoriteLinksInterface";

export class DeleteFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute(id: number) {
        await this.repository.delete(id);
    }
}