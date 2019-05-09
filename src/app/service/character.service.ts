import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Character } from '../model/character.type';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    private url = "https://www.anapioficeandfire.com/api/characters"

    constructor(private http: HttpClient) { }

    //get all characters
    getCharacters(page: number) : Observable<Character[]>{
        return this.http.get<Character[]>(this.url + "?page="+page+"&pageSize=50");
    }

    //get a character by id
    getCharacter(id: string){
        return this.http.get<Character>(this.url + "/" + id);
    }
    
}