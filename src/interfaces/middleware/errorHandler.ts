import { NextFunction, Request, Response } from "express";
import { DatabaseException, NotFoundException } from "../../domain/errors/errors";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof NotFoundException) {
        res.status(404).json({ error: err.message });
        return;
    }

    if (err instanceof DatabaseException) {
        res.status(500).json({ error: 'Erro no banco de dados: ' + err.message });
        return;
    }

    res.status(500).json({ error: 'Erro interno do servidor' });
}