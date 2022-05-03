import { BookInterface } from './BookInterface';

export interface BookAPIConstructor {
    new (key?: string): BookAPI;
}

export default interface BookAPI {
    search(query: string): Promise<BookInterface[]>;
}
