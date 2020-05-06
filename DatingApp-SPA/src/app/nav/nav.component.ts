import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Successful login');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  logging() {
    // const token = localStorage.getItem('token');

    // return !!token;
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('loged out');
  }
}
