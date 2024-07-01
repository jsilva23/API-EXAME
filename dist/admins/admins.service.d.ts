import { Admin } from './admin.entity';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { CreateAdminDTO, EditAdminDTO } from './dto';
import { Credential } from 'src/credentials/credential.entity';
export declare class AdminsService {
    private dataSource;
    private adminsRepository;
    constructor(dataSource: DataSource, adminsRepository: Repository<Admin>);
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin | null>;
    create(adminDTO: CreateAdminDTO): Promise<{
        user: Admin;
        credential: Credential;
    }>;
    update(id: number, adminDTO: EditAdminDTO): Promise<UpdateResult>;
    remove(id: number): Promise<void>;
}
