import { Component, Input } from '@angular/core';
import { HeaderComonent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComonent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = DUMMY_USERS;

}
