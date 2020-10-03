const { ImplCtrlSaludo } = require("./ImplCtrlSaludo");
/**@type {import("../js/CtrlSaludo").TipoCtrlSaludo} */
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
}