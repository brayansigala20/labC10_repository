const timestamp = Date.now();
const fecha = new Date(timestamp);
const ano = fecha.getFullYear();
const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
const dia = String(fecha.getDate()).padStart(2, '0');
const fechaFormateada = `${ano}-${mes}-${dia}`;
today = fechaFormateada



