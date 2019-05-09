import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character.type';
import { CharacterService } from '../../../service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() { 
    this.getCharacters();
  }

  characters: Character[] = [];

  //get all characters
  getCharacters(){
    for(let i = 0; i < 43; i++){
      this.characterService.getCharacters(i+1).subscribe(cha => 
        cha.forEach(character => {
          this.characters.push(character);
          let urlFragments = character.url.split('/');
          character.id = urlFragments[5];
        })
      );
    }
    this.sortCharacters();
  }

  //sort characters
  sortCharacters(){
    this.characters.sort((a,b) => { 
      return a.id.localeCompare(b.id);
    });
  }
}
