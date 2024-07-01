"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./admin.entity");
const typeorm_2 = require("typeorm");
const credential_role_1 = require("../credentials/credential_role");
const credential_entity_1 = require("../credentials/credential.entity");
const argon2 = require("argon2");
let AdminsService = class AdminsService {
    constructor(dataSource, adminsRepository) {
        this.dataSource = dataSource;
        this.adminsRepository = adminsRepository;
    }
    findAll() {
        return this.adminsRepository.find();
    }
    findOne(id) {
        return this.adminsRepository.findOneBy({ id });
    }
    async create(adminDTO) {
        const admin = new admin_entity_1.Admin();
        admin.fullName = adminDTO.fullName;
        await this.dataSource.transaction(async (transactionEntityManager) => {
            await transactionEntityManager.save(admin);
            const credential = new credential_entity_1.Credential();
            credential.email = adminDTO.email;
            credential.passwordHash = await argon2.hash(adminDTO.password);
            credential.credentialableId = admin.id;
            credential.credentialableType = 'admin';
            credential.role = credential_role_1.CredentialRole.ADMIN;
            await transactionEntityManager.save(credential);
        });
        return { user: admin, credential: admin.credential };
    }
    update(id, adminDTO) {
        return this.adminsRepository.update(id, { ...adminDTO });
    }
    async remove(id) {
        await this.adminsRepository.delete(id);
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], AdminsService);
//# sourceMappingURL=admins.service.js.map