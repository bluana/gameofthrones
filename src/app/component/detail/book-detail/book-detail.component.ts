import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { BookService } from '../../../service/book.service';
import { Book } from '../../../model/book.type';
import { Character } from '../../../model/character.type';
import { CharacterService } from '../../../service/character.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let bookId = params['id'];
      this.getBook(bookId);
    });
  }

  book: Book; 
  characters: Character[] = [];
  povCharacters: Character[] = [];

  /* 
  *  For each attribute which is another character, 
  *  crete an object which is used for routing.
  */
  getBook(id: string){
    this.bookService.getBook(id).subscribe(bk =>{
      this.book = bk;
      this.book.characters.forEach(character => {
        let id: string = (character.split('/'))[5];
        this.characterService.getCharacter(id).subscribe(ch =>{
          this.characters.push(ch);
        });
      });
      this.book.povCharacters.forEach(character => {
        let id: string = (character.split('/'))[5];
        this.characterService.getCharacter(id).subscribe(ch =>{
          this.povCharacters.push(ch);
        });
      });
    });
    
  }

  //get id number from url
  getRouteId(url: string){
    return url.split('/')[5];
  }


}
