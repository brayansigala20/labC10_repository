const expresionRegular = /\(([^)]+)\)/;
const coincidencia = expresionRegular.exec(text.email);

if (coincidencia) {
  const elementoEntreParentesis = coincidencia[1];
  text.email = elementoEntreParentesis;
}