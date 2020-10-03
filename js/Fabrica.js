import { ProxyCtrlSaludo } from "./ProxyCtrlSaludo"

import { CtrlSaludo } from "./CtrlSaludo";

export class Fabrica {
  /** @returns {CtrlSaludo} */
  get ctrlSaludo() {
    return new ProxyCtrlSaludo();
  }
}