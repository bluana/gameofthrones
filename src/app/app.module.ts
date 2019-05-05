import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { BooksComponent } from './component/list/books/books.component';
import { CharactersComponent } from './component/list/characters/characters.component';
import { HousesComponent } from './component/list/houses/houses.component';
import { BookDetailComponent } from './component/detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './component/detail/character-detail/character-detail.component';
import { HouseDetailComponent } from './component/detail/house-detail/house-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatGridListModule, MatDividerModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';



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
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent, pathMatch: 'full' },
      { path: 'book/:id', component: BookDetailComponent },
      { path: 'characters', component: CharactersComponent, pathMatch: 'full' },
      { path: 'character/:id', component: CharacterDetailComponent },
      { path: 'houses', component: HousesComponent, pathMatch: 'full' },
      { path: 'house/:id', component: HouseDetailComponent },
    ],{
      anchorScrolling: 'enabled',
    }),
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
