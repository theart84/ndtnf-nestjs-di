import {Injectable} from '@nestjs/common';
import {IBook} from './interfaces/book.interface'
import {CreateBookDto} from "./dto/CreateBookDto";

@Injectable()
export class BookService {
  private books: IBook[] = [];

  createBook(book: CreateBookDto) {
    this.books.push(book)
    return {
      status: 'success',
      message: 'Book added successfully',
      data: book
    }

  }

  findAll() {
    return {
      status: 'success',
      data: this.books
    }
  }

  findBook(id: string) {
    const book = this.books.find(book => book.id === id);
    if (book) {
      return book;
    } else {
      return {
        status: 'error',
        message: 'The book with this id was not found!'
      }
    }
  }

  updateBook(id: string, data: any) {
    const book = this.books.find(book => book.id === id);
    if (book) {
      return {
        ...book,
        ...data
      }
    } else {
      return {
        status: 'error',
        message: 'The book with this id was not found!'
      }
    }
  }

  deleteBook(id: string) {
    this.books = [...this.books.filter((book) => book.id !== id)]
    return {
      status: 'success',
      message: 'Book successfully deleted!'
    }
  }

}
