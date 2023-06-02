import defineCardSystem from './defineCardSystem';
import luhnValidate from './luhnValidate';

export default class CreditCardWidget {
  constructor(element) {
    this.element = element;

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get html() {
    return `      
      <h2>Check your credit card number</h2>
      <div class="form-container">
        <ul class="cards">
          <li class="card visa" title="Visa"><img class="visa-logo" src="../img/visa.png"></li>
          <li class="card master" title="Mastercard"><img class="mastercard-logo" src="../img/mastercard.png"></li>
          <li class="card amex" title="American Express"><img class="amex-logo" src="../img/amex.png"></li>
          <li class="card discover" title="Discover"><img class="discover-logo" src="../img/discover.png"></li>
          <li class="card jcb" title="JCB"><img class="jcb-logo" src="../img/jcb.png"></li>
          <li class="card diners_club" title="Diners Club"><img class="diners-club-logo" src="../img/diners_club.png"></li>
          <li class="card mir" title="Mir"><img class="mir-logo" src="../img/mir.png"></li>
        </ul>
        <form class="form-widget">
          <div class="form-group">
            <input class="input" type="text"
              placeholder="Credit card number">
            <button class="submit">Click to Validate</button>
          </div>
        </form>
      </div>`;
  }

  bindToDom() {
    this.element.innerHTML = CreditCardWidget.html;

    this.cards = this.element.querySelector('.cards');
    this.input = this.element.querySelector('.input');
    this.form = this.element.querySelector('.form-widget');
    this.form.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onInput);
  }

  onSubmit(e) {
    // console.log('submit');
    e.preventDefault();

    const { value } = this.input;

    this.hideChosen();

    const checkingCardStatus = defineCardSystem(value, luhnValidate);

    if (checkingCardStatus) {
      this.showValidationStatus(checkingCardStatus);
    } else {
      this.hideChosen();

      this.input.classList.add('invalid');
      this.input.value = 'Wrong Card Number';

      setTimeout(() => {
        this.input.value = '';
      }, 2000);
    }
  }

  showValidationStatus(card) {
    const cardItem = this.cards.querySelector(`[title="${card}"] img`);
    cardItem.classList.add('valid');
  }

  hideChosen() {
    for (const cardItem of this.cards.querySelectorAll('img')) {
      if (cardItem.classList.contains('valid')) {
        cardItem.classList.remove('valid');
      }
    }
  }

  onInput() {
    // console.log('input');
    if (this.input.classList.contains('invalid')) {
      this.input.classList.remove('invalid');
    }
  }
}
