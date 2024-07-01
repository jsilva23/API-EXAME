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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const argon2 = require("argon2");
const author_entity_1 = require("./author.entity");
const typeorm_2 = require("typeorm");
const credential_entity_1 = require("../credentials/credential.entity");
const credential_role_1 = require("../credentials/credential_role");
let AuthorsService = class AuthorsService {
    constructor(dataSource, authorsRepository) {
        this.dataSource = dataSource;
        this.authorsRepository = authorsRepository;
    }
    findAll() {
        return this.authorsRepository.find();
    }
    findOne(id) {
        return this.authorsRepository.findOneBy({ id });
    }
    async create(authorDTO) {
        const author = new author_entity_1.Author();
        author.fullName = authorDTO.fullName;
        await this.dataSource.transaction(async (transactionEntityManager) => {
            await transactionEntityManager.save(author);
            const credential = new credential_entity_1.Credential();
            credential.email = authorDTO.email;
            credential.passwordHash = await argon2.hash(authorDTO.password);
            credential.credentialableId = author.id;
            credential.credentialableType = 'author';
            credential.role = credential_role_1.CredentialRole.AUTHOR;
            await transactionEntityManager.save(credential);
        });
        return { user: author, credential: author.credential };
    }
    update(id, authorDTO) {
        return this.authorsRepository.update(id, { ...authorDTO });
    }
    async remove(id) {
        await this.authorsRepository.delete(id);
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], AuthorsService);
//# sourceMappingURL=authors.service.js.map