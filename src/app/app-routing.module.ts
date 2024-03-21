import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path: '', redirectTo:'homepage', pathMatch:'full'},
  {path: 'homepage', component : HomepageComponent },
  {path: 'card', component : CardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
