// import luhnValidate from "./luhnValidate";

export default function defineCardSystem(value, handler) {
  if (handler(value)) {
    const str = String(value).replace(/\D/g, '');
    const firstNumber = Number(str[0]);
    const twoNumbers = Number(str.slice(0, 2));
    const fourNumbers = Number(str.slice(0, 4));

    if (firstNumber === 2) {
      if (fourNumbers === 2200) return 'Mir';
      return 'Mastercard';
      /* if (fourNumbers === 2200) {
        return 'Mir';
      } else {
        return 'Mastercard';
      } */
    }

    if (firstNumber === 3) {
      if (twoNumbers === 35) return 'JCB';
      if (twoNumbers === 30 || twoNumbers === 36) return 'Diners Club';
      return 'American Express';
    }

    if (firstNumber === 4) return 'Visa';

    if (firstNumber === 5) return 'Mastercard';

    if (firstNumber === 6) return 'Discover';

    return false;
  }
  return false;
}
