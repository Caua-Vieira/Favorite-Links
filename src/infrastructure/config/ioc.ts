import { Container } from "typescript-ioc";
import { AbstractFavoriteLinksRepository } from "../../domain/contracts/abstractFavoriteLinksRepository";
import { FavoriteLinkRepository } from "../repository/favoriteLinkRepository";

Container.bind(AbstractFavoriteLinksRepository).to(FavoriteLinkRepository);
