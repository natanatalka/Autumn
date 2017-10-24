/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { September_PhonePortrait } from '../pages/September/PhonePortrait/September';
import { November_PhonePortrait } from '../pages/November/PhonePortrait/November';
import { Nata1_PhonePortrait } from '../pages/Nata1/PhonePortrait/Nata1';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    September_PhonePortrait,
    November_PhonePortrait,
    Nata1_PhonePortrait
  ];
  static mapping = {
    'September': {
      PhonePortrait: September_PhonePortrait
    },
    'November': {
      PhonePortrait: November_PhonePortrait
    },
    'Nata1': {
      PhonePortrait: Nata1_PhonePortrait
    }
  }
}