import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public Router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.Router.navigate(['/auth/login'])
  }

}
