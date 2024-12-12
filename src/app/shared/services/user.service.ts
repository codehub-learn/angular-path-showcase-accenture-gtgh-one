import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      {firstname: "Ioannis", lastname: "Daniil", age: 99},
      {firstname: "Ioanna", lastname: "Daniila", age: 59},
      {firstname: "Manola", lastname: "Manolida", age: 16},
      {firstname: "Artemis", lastname: "Baniil", age: 23},
      {firstname: "Nikoleta", lastname: "Leok", age: 66},
    ];
  }
}
