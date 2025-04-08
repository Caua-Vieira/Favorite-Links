import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";
import { NotFoundException } from "../domain/errors/errors";

export class GetAllFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute() {
        const links = await this.repository.getAll();

        if (!links) {
            throw new NotFoundException("Links não encontrados")
        }
    }
}