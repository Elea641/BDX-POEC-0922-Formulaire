import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  model: User = new User("", "" , "", "");
  onValidation: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.model);
  }
}
