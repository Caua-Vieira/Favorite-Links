import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";
import { IFavoriteLinks } from "../domain/types/favoriteLinksInterface";
import { NotFoundException } from "../domain/errors/errors";

export class UpdateFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute(input: IFavoriteLinks) {
        const result = await this.repository.update(input);

        if (!result) {
            throw new NotFoundException('Link não encontrado para atualização');
        }

        return result
    }
}