import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from  '../nav-bar/nav-bar.component';
import { RelojComponent } from "../reloj/reloj.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, NavBarComponent, RelojComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
