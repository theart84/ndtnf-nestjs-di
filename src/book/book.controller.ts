import {Controller, Get, Param, Post, Delete, Put, Body} from '@nestjs/common';
import {BookService} from "./book.service";
import {CreateBookDto} from "./dto/CreateBookDto";

@Controller('/api/books')
export class BookController {
  constructor(private bookService: BookService) {
  }
  @Get()
  getBooks() {
    return this.bookService.findAll();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.findBook(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() data: any) {
    return this.bookService.updateBook(id, data);
  }

}
