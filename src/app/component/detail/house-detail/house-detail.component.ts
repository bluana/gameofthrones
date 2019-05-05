import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../../service/house.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { House } from '../../../model/house.type';
import { Character } from '../../../model/character.type';
import { CharacterService } from '../../../service/character.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  constructor(private houseService: HouseService, private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let houseId = params['id'];
      this.getHouse(houseId);
    });
  }

  house: House;
  currentLord: Character;
  heir: Character;
  overlord: Character;
  founder: Character;
  cadetBranches: House[] = [];
  swornMembers: Character[] = [];

  getHouse(id: string)  {
    this.houseService.getHouse(id).subscribe(ho =>{
      this.house = ho;
      if(ho.currentLord!= ""){
        this.characterService.getCharacter(ho.currentLord.split('/')[5]).subscribe(f =>{
          this.currentLord = f;
        });
      }
      if(ho.heir!= ""){
        this.characterService.getCharacter(ho.heir.split('/')[5]).subscribe(f =>{
          this.heir = f;
        });
      }
      if(ho.overlord!= ""){
        this.characterService.getCharacter(ho.overlord.split('/')[5]).subscribe(f =>{
          this.overlord = f;
        });
      }
      if(ho.founder!= ""){
        this.characterService.getCharacter(ho.founder.split('/')[5]).subscribe(f =>{
          this.founder = f;
        });
      }
      if(ho.cadetBranches.length!=0){
        ho.cadetBranches.forEach( al => {
          this.houseService.getHouse(al.split('/')[5]).subscribe(a =>{
            this.cadetBranches.push(a);
          });
        });
      }
      if(ho.swornMembers.length!=0){
        ho.swornMembers.forEach( al => {
          this.characterService.getCharacter(al.split('/')[5]).subscribe(a =>{
            this.swornMembers.push(a);
          });
        });
      }
    });
  }

  getRouteId(url: string){
    return url.split('/')[5];
  }

}
