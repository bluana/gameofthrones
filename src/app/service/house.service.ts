import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { House } from '../model/house.type';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class HouseService {
    private url = "https://www.anapioficeandfire.com/api/houses"

    constructor(private http: HttpClient) { }

    getHouses(page: number) : Observable<House[]>{
        return this.http.get<House[]>(this.url + "?page="+page+"&pageSize=50");
    }

    getHouse(id: string){
        return this.http.get<House>(this.url + "/" + id);
    }

}