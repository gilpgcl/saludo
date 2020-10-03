class ImplCtrlSaludo {
  /** @param {string} nombre */
  async calculaSaludo(nombre) {
    const nombreSinEspacios = nombre ? nombre.trim() : "";
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
    console.log("Entra con", nombre);
    const saludo = await ctrlSaludo.calculaSaludo(nombre);
    console.log("Devuelve", saludo);
    return {
      statusCode: 200,
      body: saludo
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: error.message
    };
  }
};
