import { AbstractFavoriteLinksRepository } from "../../domain/contracts/abstractFavoriteLinksRepository";
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
            throw new Error("Method not implemented.");
        }
    }

    async getAll(): Promise<IFavoriteLinks[]> {
        try {
            const result = await pool.query("SELECT * FROM favorite_links");

            return result.rows[0];
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await pool.query("DELETE FROM favorite_links WHERE id = $1", [id]);
        } catch (error) {
            throw new Error("Method not implemented.");
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
            throw new Error("Method not implemented.");
        }
    }
}