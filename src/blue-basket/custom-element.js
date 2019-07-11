/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement, window, CustomEvent */
import render from './render';

class BlueBasket extends HTMLElement {
  render() {
    this.innerHTML = render(window.blue.count);
  }
}

export default BlueBasket;
