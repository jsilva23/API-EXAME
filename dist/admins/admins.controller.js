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
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const admins_service_1 = require("./admins.service");
const dto_1 = require("./dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let AdminsController = class AdminsController {
    constructor(adminsService) {
        this.adminsService = adminsService;
    }
    index() {
        return this.adminsService.findAll();
    }
    create(createAdminDTO) {
        return this.adminsService.create(createAdminDTO);
    }
    findOneAdmin(adminId) {
        return this.adminsService.findOne(adminId);
    }
    updateAdmin(adminId, editAdminDTO) {
        return this.adminsService.update(adminId, editAdminDTO);
    }
    removeAdmin(adminId) {
        return this.adminsService.remove(adminId);
    }
};
exports.AdminsController = AdminsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "index", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateAdminDTO]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "findOneAdmin", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditAdminDTO]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminsController.prototype, "removeAdmin", null);
exports.AdminsController = AdminsController = __decorate([
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [admins_service_1.AdminsService])
], AdminsController);
//# sourceMappingURL=admins.controller.js.map