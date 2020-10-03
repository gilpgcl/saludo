class ImplCtrlSaludo {
  /** @param {string} nombre */
  async calculaSaludo(nombre) {
    const nombreSinEspacios = nombre.trim();
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcionar el nombre.");
    }
    return `Hola ${nombreSinEspacios}.`;
  }
}
const ctrlSaludo = new ImplCtrlSaludo();
exports.handler = async event => {
  try {
    const nombre = event.queryStringParameters.nombre;
    const saludo = await ctrlSaludo.calculaSaludo(nombre);
    return {
      statusCode: 200,
      body: saludo
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};
