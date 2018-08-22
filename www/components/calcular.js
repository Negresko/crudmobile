var valor = "";
var valor1 = 0;
var valor2;

$(document).on("click","#somar", function(){

    
    var result = valor1 + valor2;
    $("#result").val(result);
});
$(document).on("click","#subtracao", function(){

    
    var result = valor1 - valor2;
    $("#result").val(result);
}); 
$(document).on("click","#multiplicacao", function(){

    
    var result = valor1 * valor2;
    $("#result").val(result);
}); 
$(document).on("click","#divisao", function(){

    
    var result = valor1 / valor2;
    $("#result").val(result);
});
$(document).on("click","#um", function(){
    valor += "1";
   $("#result").val(valor);
   
});
$(document).on("click","#dois", function(){
    valor += "2";
   $("#result").val(valor);
   
});
$(document).on("click","#tres", function(){
    valor += "3";
   $("#result").val(valor);
   
});
$(document).on("click","#quatro", function(){
    valor += "4";
   $("#result").val(valor);
   
});$(document).on("click","#cinco", function(){
    valor += "5";
   $("#result").val(valor);
   
});
$(document).on("click","#seis", function(){
    valor += "6";
   $("#result").val(valor);
   
});
$(document).on("click","#sete", function(){
    valor += "7";
   $("#result").val(valor);
   
});
$(document).on("click","#oito", function(){
    valor += "8";
   $("#result").val(valor);
   
});
$(document).on("click","#nove", function(){
    valor += "9";
   $("#result").val(valor);
   
});
$(document).on("click","#zero", function(){
    valor += "0";
   $("#result").val(valor);
   
});
