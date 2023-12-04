import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  burgerActive: boolean = false;
  constructor() {
  }
  ngOnInit(): void {
  }

  createSubject() {
    console.log("createSubject");
  }

  changeBurger() {
    this.burgerActive = !this.burgerActive;
  }
}