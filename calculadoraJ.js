function adicionarNumero(numero){
document.getElementById("display").value+=numero
}
function adicionarOperacao(operacao){
  document.getElementById("display").value+=operacao
}
function Resultado(){
  let resultado = Number(eval(document.getElementById("display").value))
  document.getElementById("display").value = resultado
}
function Clear(){
  document.getElementById("display").value = ""
}