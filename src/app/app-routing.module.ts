import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  // { path:'', redirectTo:'home', pathMatch:'full'},
  // { path : 'home', component:AddressComponent},
  // { path: 'thirdApp', component: ThirdAppComponent}
  { path: 'home', component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
