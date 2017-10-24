/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { September_PhonePortrait } from '../pages/September/PhonePortrait/September';
import { November_PhonePortrait } from '../pages/November/PhonePortrait/November';
import { Nata2_PhonePortrait } from '../pages/Nata2/PhonePortrait/Nata2';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { Blank1_PhonePortrait } from '../pages/Blank1/PhonePortrait/Blank1';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    September_PhonePortrait,
    November_PhonePortrait,
    Nata2_PhonePortrait,
    Blank_PhonePortrait,
    Blank1_PhonePortrait,
    Login_PhonePortrait
  ];
  static mapping = {
    'September': {
      PhonePortrait: September_PhonePortrait
    },
    'November': {
      PhonePortrait: November_PhonePortrait
    },
    'Nata2': {
      PhonePortrait: Nata2_PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    'Blank1': {
      PhonePortrait: Blank1_PhonePortrait
    },
    'Login': {
      PhonePortrait: Login_PhonePortrait
    }
  }
}