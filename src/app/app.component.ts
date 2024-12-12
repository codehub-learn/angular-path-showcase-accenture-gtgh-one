import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { User } from './shared/model/user';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/services/user.service';
import { MainContentComponent } from "./components/main-content/main-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title?: string;
  user: User = {age: 15, firstname: "Manolis", lastname: "Manolios"};
  isDisplayed: boolean = true;
  users?: User[];

  // DI -> dependency injection
  constructor(private userService: UserService){ 
    console.log("test123");
    this.title = "123";
    console.log(this.users);
    this.users = this.userService.getUsers();
  }
  
  onClick(){
    console.log("hello");
    // if(this.title) {
    //   let character = this.title.charAt(1);
    //   console.log(character);
    // }
    let character = this.title!.charAt(1);
    console.log(character);
    console.log("123");
    console.log(this.user.firstname);
  }

  onAgeToggle() {
    this.isDisplayed = !this.isDisplayed;
  }
}
