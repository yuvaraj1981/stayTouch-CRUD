import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-assess-login',
  templateUrl: './assess-login.component.html',
  styleUrls: ['./assess-login.component.scss']
})
export class AssessLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  formData: any = '';

  hide = true;

  constructor(private authService : AuthService, private router : Router) { 
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
   });
   }

  ngOnInit() {}

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    this.authService.login(this.userName, this.password)
       .subscribe( data => {    
         if(data) this.router.navigate(['/data-table']); 
    });
 }

}
