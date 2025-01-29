import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private http:UserService){}
  

  name="";
  email="";
  mobile="";
  pin_code="";
  budget="";
  message="";

  onsubmit(): void{
    const data={name:this.name,email:this.email,mobile:this.mobile,pin_code:this.pin_code,budget:this.budget}
    this.http.adduser(data).subscribe(
      (res:any)=>{
        this.message=res.message;
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.pin_code = '';
        this.budget = '';
      },
      (err)=>{
        this.message='error adding user. please try agin.'
        console.error(err);
      }
    );
  }


  }

