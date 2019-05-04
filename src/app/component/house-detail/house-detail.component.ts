import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../service/house.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { House } from '../../model/house.type';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  constructor(private houseService: HouseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let houseId = params['id'];
      this.getHouse(houseId);
    });
  }

  house: House;

  getHouse(id: string)  {
    this.houseService.getHouse(id).subscribe(ho =>{
      this.house = ho;
    });
  }

  getRouteId(url: string){
    return url.split('/')[5];
  }

}
