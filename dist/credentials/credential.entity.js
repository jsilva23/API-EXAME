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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const credential_role_1 = require("./credential_role");
const admin_entity_1 = require("../admins/admin.entity");
const author_entity_1 = require("../authors/author.entity");
const user_entity_1 = require("../users/user.entity");
let Credential = class Credential {
};
exports.Credential = Credential;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Credential.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Credential.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ name: 'password_hash' }),
    __metadata("design:type", String)
], Credential.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['admin', 'author', 'user'], default: 'user' }),
    __metadata("design:type", String)
], Credential.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credentialable_type' }),
    __metadata("design:type", String)
], Credential.prototype, "credentialableType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credentialable_id' }),
    __metadata("design:type", Number)
], Credential.prototype, "credentialableId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => admin_entity_1.Admin, (admin) => admin.credential, { nullable: true }),
    __metadata("design:type", admin_entity_1.Admin)
], Credential.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => author_entity_1.Author, (author) => author.credential, { nullable: true }),
    __metadata("design:type", author_entity_1.Author)
], Credential.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.credential, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Credential.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Credential.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Credential.prototype, "updatedAt", void 0);
exports.Credential = Credential = __decorate([
    (0, typeorm_1.Entity)({ name: 'credentials' }),
    (0, typeorm_1.Unique)(['credentialableType', 'credentialableId'])
], Credential);
//# sourceMappingURL=credential.entity.js.map