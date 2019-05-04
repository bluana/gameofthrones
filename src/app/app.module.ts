import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { BooksComponent } from './component/books/books.component';
import { CharactersComponent } from './component/characters/characters.component';
import { HousesComponent } from './component/houses/houses.component';
import { BookDetailComponent } from './component/detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './component/detail/character-detail/character-detail.component';
import { HouseDetailComponent } from './component/detail/house-detail/house-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatListModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({ 
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    BookDetailComponent,
    CharacterDetailComponent,
    HouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent, pathMatch: 'full' },
      { path: 'book/:id', component: BookDetailComponent },
      { path: 'characters', component: CharactersComponent, pathMatch: 'full' },
      { path: 'character/:id', component: CharacterDetailComponent },
      { path: 'houses', component: HousesComponent, pathMatch: 'full' },
      { path: 'house/:id', component: HouseDetailComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
