import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];

  constructor() {
    console.log('contructor ran');
   }

  ngOnInit() {
    console.log('ngOnInit ran');
    this.name  = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
  }

  onClick() {
    // console.log('onClick function says: Hi there!');
    this.name = 'Enzo (:';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby) {
    // console.log(hobby);
    this.hobbies.unshift(hobby);
    return false; // dont allow the form be submitted
  }

  deleteHobby(hobby) {
    // console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}