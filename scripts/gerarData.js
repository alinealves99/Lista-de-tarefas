function gerarDiaSemana (){
const localUsuario = navigator.language;
const diaSemana = new Date().toLocaleDateString(localUsuario, { weekday: "long" });
const diaCompleto = new Date().toLocaleDateString(localUsuario);
const horario = new Date().toLocaleTimeString(localUsuario, { hour: "numeric", minute: "numeric" })
// const diaSemana = new Date().toLocaleDateString("pt-br", { weekday: "long" });
// const diaCompleto = new Date().toLocaleDateString("pt-br");
// const horario = new Date().toLocaleTimeString("pt-br", { hour: "numeric", minute: "numeric" })
const dataCompleta = `${diaSemana} (${diaCompleto}) ás ${horario}`
return dataCompleta;
}
export default gerarDiaSemana;