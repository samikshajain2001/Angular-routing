import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { PantsComponent } from './pants/pants.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {
    path: 'product', 
    component:ProductComponent,
    children:[
      {path: 'tshirts', component:TshirtComponent},
      {path: 'pants', component:PantsComponent}
    ]
  },
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'employees', component:EmployeesListComponent},
  {path: 'employees/:id', component:EmployeeDetailsComponent},
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
