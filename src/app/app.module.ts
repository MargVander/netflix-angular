import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenrelisteComponent } from './genreliste/genreliste.component';
import { MovielistComponent } from './movielist/movielist.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { RandombannerComponent } from './randombanner/randombanner.component';


@NgModule({
  declarations: [
    AppComponent,
    GenrelisteComponent,
    MovielistComponent,
    PageComponent,
    HeaderComponent,
    RandombannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
