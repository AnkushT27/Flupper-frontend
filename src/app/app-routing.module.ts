import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
{
  path:'profile',
  loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
},
{
    path:'',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
