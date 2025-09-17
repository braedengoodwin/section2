import { Component } from '@angular/core';
import { HeaderComonent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComonent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
