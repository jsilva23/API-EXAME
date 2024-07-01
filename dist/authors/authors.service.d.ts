import { Author } from './author.entity';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { CreateAuthorDTO, EditAuthorDTO } from './dto';
import { Credential } from 'src/credentials/credential.entity';
export declare class AuthorsService {
    private dataSource;
    private authorsRepository;
    constructor(dataSource: DataSource, authorsRepository: Repository<Author>);
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author | null>;
    create(authorDTO: CreateAuthorDTO): Promise<{
        user: Author;
        credential: Credential;
    }>;
    update(id: number, authorDTO: EditAuthorDTO): Promise<UpdateResult>;
    remove(id: number): Promise<void>;
}
