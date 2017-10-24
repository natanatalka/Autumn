/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { September_PhonePortrait } from '../pages/September/PhonePortrait/September';
import { November_PhonePortrait } from '../pages/November/PhonePortrait/November';
import { Screen2_PhonePortrait } from '../pages/Screen2/PhonePortrait/Screen2';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    September_PhonePortrait,
    November_PhonePortrait,
    Screen2_PhonePortrait
  ];
  static mapping = {
    'September': {
      PhonePortrait: September_PhonePortrait
    },
    'November': {
      PhonePortrait: November_PhonePortrait
    },
    'Screen2': {
      PhonePortrait: Screen2_PhonePortrait
    }
  }
}