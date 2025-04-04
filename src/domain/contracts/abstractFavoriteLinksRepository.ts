import { IFavoriteLinks } from "../types/favoriteLinksInterface";

export abstract class AbstractFavoriteLinksRepository {
    abstract create(favoriteLink: IFavoriteLinks): Promise<IFavoriteLinks>;
    abstract getAll(): Promise<IFavoriteLinks[]>;
    abstract delete(id: number): Promise<void>;
    abstract update(favoriteLink: IFavoriteLinks): Promise<IFavoriteLinks>;
}   