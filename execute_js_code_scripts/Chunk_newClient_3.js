
const fecha = new Date(text.fecha);
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const year = fecha.getFullYear();
const month = fecha.getMonth(); 
const day = fecha.getDate();
const monthName = meses[month];
text.fecha = {
    year:year.toString(),
    monthName:monthName,
    day:day.toString().length === 2? day.toString(): '0'+day.toString()
}