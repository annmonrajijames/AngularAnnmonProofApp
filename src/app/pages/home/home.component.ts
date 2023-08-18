import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mobile: string = '';
  password: string = '';

  constructor(private router: Router) {}

  handleLogin(): void {
    if (this.mobile === '9567' && this.password === '1234') {
      this.router.navigate(['/bluetooth1']);
    } else {
      alert('Incorrect mobile number or password.');
    }
  }
}
