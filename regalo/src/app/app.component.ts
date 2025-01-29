import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'regalo';
  head_email="amankhichi24@gmail.com";
  constructor(private rr:Router){}

  
}
