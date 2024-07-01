import { UsersService } from './users.service';
import { CreateUserDTO, EditUserDTO } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    index(): Promise<import("./user.entity").User[]>;
    create(createUserDTO: CreateUserDTO): Promise<{
        user: import("./user.entity").User;
        credential: import("../credentials/credential.entity").Credential;
    }>;
    findOneUser(userId: number): Promise<import("./user.entity").User>;
    updateUser(userId: number, editUserDTO: EditUserDTO): Promise<import("typeorm").UpdateResult>;
    removeUser(userId: number): Promise<void>;
}
