class ImplCtrlSaludo {
  /** @param {string} nombre */
  async calculaSaludo(nombre) {
    const nombreSinEspacios = nombre?.trim();
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcionar el nombre.");
    }
    return `Hola ${nombreSinEspacios}.`;
  }
}
exports.ImplCtrlSaludo = ImplCtrlSaludo;