import { AuthorsService } from './authors.service';
import { EditAuthorDTO, CreateAuthorDTO } from './dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    index(): Promise<import("./author.entity").Author[]>;
    create(createAuthorDTO: CreateAuthorDTO): Promise<{
        user: import("./author.entity").Author;
        credential: import("../credentials/credential.entity").Credential;
    }>;
    findOneAuthor(authorId: number): Promise<import("./author.entity").Author>;
    updateAuthor(authorId: number, editAuthorDTO: EditAuthorDTO): Promise<import("typeorm").UpdateResult>;
    removeAuthor(authorId: number): Promise<void>;
}
