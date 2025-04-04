import { Inject } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../domain/contracts/abstractFavoriteLinksRepository";

export class GetAllFavoriteLinksUseCase {

    constructor(
        @Inject
        private readonly repository: AbstractFavoriteLinksRepository
    ) { }

    public async execute() {
        await this.repository.getAll();
    }
}