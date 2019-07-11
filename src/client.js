/* globals window */
import BlueBasket from './blue-basket/custom-element';

window.blue = { count: 0 };
window.customElements.define('blue-basket', BlueBasket);