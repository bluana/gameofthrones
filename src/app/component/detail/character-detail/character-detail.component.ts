import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../service/character.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Character } from '../../../model/character.type';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      let characterId = params['id'];
      this.getCharacter(characterId);
    });
  }

  character: Character;

  getCharacter(id: string){
    this.characterService.getCharacter(id).subscribe(ch =>{
      this.character = ch;
    });
  }

  getRouteId(url: string){
    return url.split('/')[5];
  }


}
