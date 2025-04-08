export class NotFoundException extends Error {
    public readonly name: string = 'Internal Error';
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}

export class DatabaseException extends Error {
    public readonly name: string = 'Database Error';

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, DatabaseException.prototype);
    }
}
