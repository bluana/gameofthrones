import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/model/house.type';
import { HouseService } from '../../../service/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private houseService: HouseService) { }

  ngOnInit() { 
    this.getHouses();
  }

  houses: House[]= [];

  getHouses(){
    for(let i = 0; i < 9; i++){
      this.houseService.getHouses(i+1).subscribe(hou => 
        hou.forEach(house => {
          this.houses.push(house);
          let urlFragments = house.url.split('/');
          house.id = urlFragments[5];
        })
      );
    }
    this.sortHouses();
  }

  sortHouses(){
    this.houses.sort((a,b) => { 
      return a.id.localeCompare(b.id);
    });
  }

}
