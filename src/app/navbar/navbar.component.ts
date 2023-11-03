import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  showAssamMenu: boolean = false;

  toggleAssamMenu() {
    this.showAssamMenu = !this.showAssamMenu;
  }

}
