import { Component } from '@angular/core';
import { menu } from '../../../data-menu';

@Component({
  selector: 'app-aside-menu-component',
  templateUrl: './aside-menu-component.component.html',
  styleUrls: ['./aside-menu-component.component.css']
})
export class AsideMenuComponentComponent {
  menuName: string = ""
  menuData = menu
}
