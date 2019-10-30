import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenrelisteComponent } from './genreliste/genreliste.component'
import { PageComponent } from './page/page.component'



const routes: Routes = [
  {'path':'',component:GenrelisteComponent},
  {'path':'page/:id',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
