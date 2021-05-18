import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './dashboard/detail/detail.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PetitionComponent } from './dashboard/petition/petition.component';
import { PetitionlistComponent } from './dashboard/petitionlist/petitionlist.component';

const routes: Routes = [
{
  path:"petition", component:PetitionComponent
},
{
  path:"petitionlist", component:PetitionlistComponent
},
{
  path:"home", component:HomeComponent
},
{
  path:"detail/:id", component:DetailComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
