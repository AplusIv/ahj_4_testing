import visa from '../img/visa.png';
import mir from '../img/mir.png';
import amex from '../img/amex.png';
import dinersClub from '../img/diners_club.png';
import discover from '../img/discover.png';
import jcb from '../img/jcb.png';
import mastercard from '../img/mastercard.png';

import CreditCardWidget from './creditCardWidget';

const container = document.querySelector('.container');

const creditCardWidget = new CreditCardWidget(container);
creditCardWidget.bindToDom();
