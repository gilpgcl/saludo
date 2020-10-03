exports.handler = async event => {
  try {
    const nombre = event.queryStringParameters.nombre;
    const saludo = `$HOla{nombre}`;
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
