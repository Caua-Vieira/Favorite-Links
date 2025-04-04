import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";
import { IFavoriteLinks } from "../domain/types/favoriteLinksInterface";

export class UpdateFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute(input: IFavoriteLinks) {
        await this.repository.update(input);
    }
}