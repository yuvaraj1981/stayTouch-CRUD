import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stayTouch-CRUD';

  constructor(private authService : AuthService, private router : Router) {
    if(localStorage.getItem('form-data') == null){
      localStorage.setItem('form-data', JSON.stringify([]));
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);  
  }

}
