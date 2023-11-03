import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstinassamComponent } from './firstinassam/firstinassam.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { FirstInIndiaComponent } from './first-in-india/first-in-india.component';
import { AssamGeopraphyComponent } from './assam-geopraphy/assam-geopraphy.component';
import { IndiaGeopraphyComponent } from './india-geopraphy/india-geopraphy.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  { path: 'firstinassam', component: FirstinassamComponent },
  {path:'homepage',component:HomepageComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about',component:AboutComponent},
  {path:'first-in-india',component:FirstInIndiaComponent},
  {path:'assam-geography',component:AssamGeopraphyComponent},
  {path:'india-geography',component:IndiaGeopraphyComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
