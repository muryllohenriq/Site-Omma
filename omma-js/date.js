const hoje = new Date();
const cincoDias = dateFns.addDays(hoje, 5)
console.log(dateFns.format(cincoDias, 'DD/MM/YYYY HH:MM'));
console.log("É depos?", dateFns.isAfter(cincoDias, hoje));