import { EditBookDTO, AddBookDTO } from './dto';
import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    index(): Promise<import("./book.entity").Book[]>;
    addBook(addBookDTO: AddBookDTO, req: any): Promise<import("./book.entity").Book>;
    listAuthorBooks(req: any): Promise<import("./book.entity").Book[]>;
    listAcceptedBooks(): Promise<import("./book.entity").Book[]>;
    readBook(bookId: number): Promise<import("./book.entity").Book>;
    updateBook(bookId: number, editBookDTO: EditBookDTO): Promise<import("typeorm").UpdateResult>;
    acceptBook(bookId: number): Promise<import("typeorm").UpdateResult>;
    removeBook(bookId: number): Promise<void>;
}
