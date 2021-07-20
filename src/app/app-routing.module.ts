import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquireComponent } from './inquire/inquire.component';


const routes: Routes = [
  {component: InquireComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
