import { Author } from 'src/authors/author.entity';
export declare class Book {
    id: number;
    title: string;
    author: Author;
    createdAt: Date;
    updatedAt: Date;
    accepted: boolean;
}
