import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_service/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private route: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Successful login');
      },
      (error) => {
        this.alertify.error(error);
      },
      () =>{
        this.route.navigate(['/members']);
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
    this.route.navigate(['/home']);
  }
}
