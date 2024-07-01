import { User } from './user.entity';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO, EditUserDTO } from './dto';
import { Credential } from 'src/credentials/credential.entity';
export declare class UsersService {
    private dataSource;
    private usersRepository;
    constructor(dataSource: DataSource, usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    create(userDTO: CreateUserDTO): Promise<{
        user: User;
        credential: Credential;
    }>;
    update(id: number, userDTO: EditUserDTO): Promise<UpdateResult>;
    remove(id: number): Promise<void>;
}
