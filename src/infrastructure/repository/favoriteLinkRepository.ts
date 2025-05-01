import { AbstractFavoriteLinksRepository } from "../../domain/contracts/abstractFavoriteLinksRepository";
import { DatabaseException } from "../../domain/errors/errors";
import { IFavoriteLinks } from "../../domain/types/favoriteLinksInterface";
import { pool } from "../database/dbConnection";

export class FavoriteLinkRepository implements AbstractFavoriteLinksRepository {

    async create(favoriteLink: IFavoriteLinks): Promise<IFavoriteLinks> {
        try {

            const result = await pool.query(
                "INSERT INTO favorite_links (title, url, category) VALUES ($1, $2, $3) RETURNING *",
                [favoriteLink.title, favoriteLink.url, favoriteLink.category]
            );

            return result.rows[0];
        } catch (error) {
            throw new DatabaseException("Ocorreu um erro ao tentar inserir novo link");
        }
    }

    async getAll(): Promise<IFavoriteLinks[]> {
        try {
            const result = await pool.query("SELECT * FROM favorite_links");

            return result.rows;
        } catch (error) {
            throw new DatabaseException("Ocorreu um erro ao consultar banco de dados");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await pool.query("DELETE FROM favorite_links WHERE id = $1", [id]);
        } catch (error) {
            throw new DatabaseException("Ocorreu um erro ao tentar deletar link do banco de dados");
        }
    }

    async update(favoriteLink: IFavoriteLinks): Promise<IFavoriteLinks> {
        try {
            const result = await pool.query(
                "UPDATE favorite_links SET title = $1, url = $2, category = $3 WHERE id = $4 RETURNING *",
                [favoriteLink.title, favoriteLink.url, favoriteLink.category, favoriteLink.id]
            );

            return result.rows[0];
        } catch (error) {
            throw new DatabaseException("Ocorreu um erro ao tentar atualizar links cadastrados");
        }
    }
}