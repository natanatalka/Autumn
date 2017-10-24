/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { September_PhonePortrait } from '../pages/September/PhonePortrait/September';
import { October_PhonePortrait } from '../pages/October/PhonePortrait/October';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    September_PhonePortrait,
    October_PhonePortrait
  ];
  static mapping = {
    'September': {
      PhonePortrait: September_PhonePortrait
    },
    'October': {
      PhonePortrait: October_PhonePortrait
    }
  }
}