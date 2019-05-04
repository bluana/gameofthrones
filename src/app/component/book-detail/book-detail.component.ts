import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book.type';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bookId = params['id'];
      this.getBook(bookId);
    });
  }

  book: Book;

  getBook(id: string){
    this.bookService.getBook(id).subscribe(bk =>{
      this.book = bk;
    });
  }

  getRouteId(url: string){
    return url.split('/')[5];
  }


}
