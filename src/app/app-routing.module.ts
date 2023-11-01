import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstinassamComponent } from './firstinassam/firstinassam.component';

const routes: Routes = [
  { path: 'firstinassam', component: FirstinassamComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
