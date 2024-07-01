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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./book.entity");
const typeorm_2 = require("typeorm");
const authors_service_1 = require("../authors/authors.service");
let BooksService = class BooksService {
    constructor(booksRepository, authorService) {
        this.booksRepository = booksRepository;
        this.authorService = authorService;
    }
    findAll() {
        return this.booksRepository.find({
            relations: {
                author: true,
            },
        });
    }
    findAlthorBooks(authorId) {
        return this.booksRepository
            .createQueryBuilder('books')
            .innerJoinAndSelect('books.author', 'author')
            .where('author.id = :id', { id: authorId })
            .getMany();
    }
    findAcceptedBooks() {
        return this.booksRepository
            .createQueryBuilder('books')
            .innerJoinAndSelect('books.author', 'author')
            .where('books.accepted = :accepted', { accepted: true })
            .getMany();
    }
    async read(id) {
        const book = await this.booksRepository
            .createQueryBuilder('books')
            .innerJoinAndSelect('books.author', 'author')
            .where('books.id = :id', { id })
            .getOne();
        if (!book.accepted)
            throw new common_1.UnauthorizedException();
        return book;
    }
    async create(bookDTO, authorId) {
        const book = new book_entity_1.Book();
        book.title = bookDTO.title;
        const author = await this.authorService.findOne(authorId);
        book.author = author;
        return this.booksRepository.save(book);
    }
    accept(id) {
        return this.booksRepository.update(id, { accepted: true });
    }
    update(id, bookDTO) {
        return this.booksRepository.update(id, { ...bookDTO });
    }
    async remove(id) {
        await this.booksRepository.delete(id);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        authors_service_1.AuthorsService])
], BooksService);
//# sourceMappingURL=books.service.js.map