import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { SignupDTO} from 'src/app/model/signup.model';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  allUsers: SignupDTO[]=[];

  message!: any;

  // signupForm: SignupDTO={
  //   id: 0,
  //   userName:'',
  //   email:'',
  //   mobileNumber:0,
  //   password:''
  // }

  signupForm: SignupDTO=new SignupDTO();

  constructor(private router:Router,private signupService:SignupService) { 
    
  }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.signupService.get().subscribe((data) => {
      this.allUsers = data;
    })
  }

  saveChanges() { 
    //Triger the Custom Event
    this.signupService.addUser(this.signupForm).subscribe({
      next:(data) => {
        this.router.navigate(["/home/login"]) 
       },
       error:(err) => {
        console.log(err);
      }
    })
  }

  // saveChanges() { 
  //   //Triger the Custom Event
  //   let resp = this.signupService.addUser(this.signupForm);
    
  //   resp.subscribe((data) => this. message = data);
  //   console.log(this.message);
  // }

}
