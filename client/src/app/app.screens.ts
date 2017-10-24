/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { September_PhonePortrait } from '../pages/September/PhonePortrait/September';
import { November_PhonePortrait } from '../pages/November/PhonePortrait/November';
import { 2 _PhonePortrait } from '../pages/2/PhonePortrait/2';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    September_PhonePortrait,
    November_PhonePortrait,
    2 _PhonePortrait
  ];
  static mapping = {
    'September': {
      PhonePortrait: September_PhonePortrait
    },
    'November': {
      PhonePortrait: November_PhonePortrait
    },
    '2': {
      PhonePortrait: 2 _PhonePortrait
    }
  }
}