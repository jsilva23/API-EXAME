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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const books_service_1 = require("./books.service");
const roles_decorator_1 = require("../auth/roles.decorator");
const role_enum_1 = require("../auth/role.enum");
const roles_guard_1 = require("../auth/roles.guard");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    index() {
        return this.booksService.findAll();
    }
    addBook(addBookDTO, req) {
        const { currentUser: author } = req;
        return this.booksService.create(addBookDTO, author.id);
    }
    listAuthorBooks(req) {
        const { currentUser: author } = req;
        return this.booksService.findAlthorBooks(author.id);
    }
    listAcceptedBooks() {
        return this.booksService.findAcceptedBooks();
    }
    readBook(bookId) {
        return this.booksService.read(bookId);
    }
    updateBook(bookId, editBookDTO) {
        return this.booksService.update(bookId, editBookDTO);
    }
    acceptBook(bookId) {
        return this.booksService.accept(bookId);
    }
    removeBook(bookId) {
        return this.booksService.remove(bookId);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "index", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.AUTHOR),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddBookDTO, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "addBook", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.AUTHOR),
    (0, common_1.Get)('mybooks'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "listAuthorBooks", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.USER),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "listAcceptedBooks", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.USER),
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "readBook", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.AUTHOR),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditBookDTO]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.Patch)('accept/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "acceptBook", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.AUTHOR),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "removeBook", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map