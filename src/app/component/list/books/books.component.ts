import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.type';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() { 
    this.getBooks();
  }

  books: Book[] = [];

  getBooks(){
    this.bookService.getBooks().subscribe(bks => {this.books = bks;
      this.books.forEach(book => {
        let urlFragments = book.url.split('/');
        book.id = urlFragments[5];
      });
    });
    this.sortBooks();
  }

  sortBooks(){
    this.books.sort((a,b) => { 
      return a.id.localeCompare(b.id);
    });
  }

}
