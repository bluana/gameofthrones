import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../service/character.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Character } from '../../../model/character.type';
import {MatTableModule} from '@angular/material/table';
import { Book } from '../../../model/book.type';
import { House } from '../../../model/house.type';
import { HouseService } from '../../../service/house.service';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private characterService: CharacterService, private route: ActivatedRoute, private houseService: HouseService, private bookService: BookService) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      let characterId = params['id'];
      this.getCharacter(characterId);
    });
  }

  character: Character;
  father: Character;
  mother: Character;
  spouse: Character;
  allegiances: House[]=[];
  books: Book[]=[];
  povBooks: Book[] =[];

  getCharacter(id: string){
    this.characterService.getCharacter(id).subscribe(ch =>{
      this.character = ch;
      if(ch.father!= ""){
        this.characterService.getCharacter(ch.father.split('/')[5]).subscribe(f =>{
          this.father = f;
        });
      }
      if(ch.mother!=""){
        this.characterService.getCharacter(ch.mother.split('/')[5]).subscribe(m =>{
          this.mother = m;
        });
      }
      if(ch.spouse!=""){
        this.characterService.getCharacter(ch.spouse.split('/')[5]).subscribe(s =>{
          this.spouse = s;
        });
      }
      if(ch.allegiances.length!=0){
        ch.allegiances.forEach( al => {
          this.houseService.getHouse(al.split('/')[5]).subscribe(a =>{
            this.allegiances.push(a);
          });
        });
      }
      if(ch.books.length!=0){
        ch.books.forEach( al => {
          this.bookService.getBook(al.split('/')[5]).subscribe(a =>{
            this.books.push(a);
          });
        });
      }
      if(ch.povBooks.length!=0){
        ch.povBooks.forEach( al => {
          this.bookService.getBook(al.split('/')[5]).subscribe(a =>{
            this.povBooks.push(a);
          });
        });
      }
    });
  }

  getRouteId(url: string){
    return url.split('/')[5];
  }


}
