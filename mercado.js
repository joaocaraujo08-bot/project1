function verificar(){
    var select1 = document.getElementById('sele');
    var value1 = select1.options[select1.selectedIndex].value;

    document.form1.resul.value = parseFloat(document.form1.resul.value) + parseFloat(value1);

    console.log(value1);

    event.preventDefault();
    //var soma = r.value + t.value;
    //document.form1.resul.value = soma.value;
}

function resultado(){
    let selec2 = document.getElementById('selex');
    var value2 = selec2.options[selec2.selectedIndex].value;
    document.form1.resul.value = parseFloat(document.form1.resul.value) + parseFloat(value2);
    console.log(value2)
    event.preventDefault();

}
resultado()
function sorvete(){
let selet3 = document.getElementById('selec');
var value3 = selet3.options[selet3.selectedIndex].value;
document.form1.resul.value = parseFloat(document.form1.resul.value) + parseFloat(value3);
console.log(value3)
// document.form1.resul.value = value3
event.preventDefault();
}
sorvete()
function artesanal(){
let seletu4 = document.getElementById('seletu');
var value4 = seletu4.options[seletu4.selectedIndex].value;
document.form1.resul.value = parseFloat(document.form1.resul.value) + parseFloat(value4);

//document.form1.resul.value = value4;
console.log(value4)

event.preventDefault();
}

function compra(){
if( document.form1.resul.value == "" ||  document.form1.resul.value == 0  ){
alert("Escolha o seu produto")

}else{
var c = document.getElementById("com")

c.innerHTML = "Muito obrigado por comprar na Pé de Moleque"


}
event.preventDefault();

}
compra() 