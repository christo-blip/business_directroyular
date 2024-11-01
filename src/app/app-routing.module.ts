import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './_component/mainpage/mainpage.component';
import { BusinessuserComponent } from './_component/businessuser/businessuser.component';
import { SelectedServiceComponent } from './_component/selected-service/selected-service.component';


const routes: Routes = [
  { path: '', component: MainpageComponent }, 
  {path:'businessuser' ,component:BusinessuserComponent},
  {path:'mainpage' ,component:MainpageComponent},
  {path:'category/:category' ,component:SelectedServiceComponent},
  // { path: '', redirectTo: '/mainpage', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
