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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const credential_role_1 = require("../credentials/credential_role");
const credential_entity_1 = require("../credentials/credential.entity");
const argon2 = require("argon2");
let UsersService = class UsersService {
    constructor(dataSource, usersRepository) {
        this.dataSource = dataSource;
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find();
    }
    findOne(id) {
        return this.usersRepository.findOneBy({ id });
    }
    async create(userDTO) {
        const user = new user_entity_1.User();
        user.fullName = userDTO.fullName;
        await this.dataSource.transaction(async (transactionEntityManager) => {
            await transactionEntityManager.save(user);
            const credential = new credential_entity_1.Credential();
            credential.email = userDTO.email;
            credential.passwordHash = await argon2.hash(userDTO.password);
            credential.credentialableId = user.id;
            credential.credentialableType = 'user';
            credential.role = credential_role_1.CredentialRole.USER;
            await transactionEntityManager.save(credential);
        });
        return { user: user, credential: user.credential };
    }
    update(id, userDTO) {
        return this.usersRepository.update(id, { ...userDTO });
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map