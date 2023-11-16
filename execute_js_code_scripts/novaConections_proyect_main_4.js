const lineas = message_folio.text.split('\n')
const objetoResultado = {}
lineas.forEach(linea => {
  const partes = linea.split(':')
  if (partes.length === 2) {
    const clave = partes[0].split(' ')[0].trim().toLocaleLowerCase()
    const valor = partes[1].trim()
    objetoResultado[clave] = valor.trim()
  }
});
text = objetoResultado