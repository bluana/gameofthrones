import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Book } from '../model/book.type';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url = "https://www.anapioficeandfire.com/api/books"

    constructor(private http: HttpClient) { }

    //get all books
    getBooks() : Observable<Book[]>{
        return this.http.get<Book[]>(this.url + "?page=1&pageSize=50");
    }

    //get a book by id
    getBook(id: string){
        return this.http.get<Book>(this.url + "/" + id);
    }

}