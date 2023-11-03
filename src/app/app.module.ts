import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstinassamComponent } from './firstinassam/firstinassam.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { FirstInIndiaComponent } from './first-in-india/first-in-india.component';
import { AssamGeopraphyComponent } from './assam-geopraphy/assam-geopraphy.component';
import { IndiaGeopraphyComponent } from './india-geopraphy/india-geopraphy.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstinassamComponent,
    HomepageComponent,
    ContactUsComponent,
    AboutComponent,
    FirstInIndiaComponent,
    AssamGeopraphyComponent,
    IndiaGeopraphyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
