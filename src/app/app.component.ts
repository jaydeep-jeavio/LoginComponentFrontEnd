import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './components/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService : AuthServiceService){};
  title = 'logInComponent';

  ngOnInit(): void {
    this.authService.autoAuthUser();  
  }
}
