import { AdminsService } from './admins.service';
import { CreateAdminDTO, EditAdminDTO } from './dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    index(): Promise<import("./admin.entity").Admin[]>;
    create(createAdminDTO: CreateAdminDTO): Promise<{
        user: import("./admin.entity").Admin;
        credential: import("../credentials/credential.entity").Credential;
    }>;
    findOneAdmin(adminId: number): Promise<import("./admin.entity").Admin>;
    updateAdmin(adminId: number, editAdminDTO: EditAdminDTO): Promise<import("typeorm").UpdateResult>;
    removeAdmin(adminId: number): Promise<void>;
}
