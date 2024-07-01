import { Book } from './book.entity';
import { Repository, UpdateResult } from 'typeorm';
import { AddBookDTO, EditBookDTO } from './dto';
import { AuthorsService } from 'src/authors/authors.service';
export declare class BooksService {
    private booksRepository;
    private authorService;
    constructor(booksRepository: Repository<Book>, authorService: AuthorsService);
    findAll(): Promise<Book[]>;
    findAlthorBooks(authorId: number): Promise<Book[]>;
    findAcceptedBooks(): Promise<Book[]>;
    read(id: number): Promise<Book | null>;
    create(bookDTO: AddBookDTO, authorId: number): Promise<Book>;
    accept(id: number): Promise<UpdateResult>;
    update(id: number, bookDTO: EditBookDTO): Promise<UpdateResult>;
    remove(id: number): Promise<void>;
}
