import { Book } from 'src/books/book.entity';
import { Credential } from 'src/credentials/credential.entity';
export declare class User {
    id: number;
    fullName: string;
    credential: Credential;
    books: Book[];
    createdAt: Date;
    updatedAt: Date;
}
