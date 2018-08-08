$(document).on("click","#somar", function(){
    var valor1 = parseInt($("#valor1").val());
    var valor2 = parseInt($("#valor2").val());
    
    var result = valor1 + valor2;
    $("#result").val(result);
});
$(document).on("click","#subtracao", function(){
    var valor1 = parseInt($("#valor1").val());
    var valor2 = parseInt($("#valor2").val());
    
    var result = valor1 - valor2;
    $("#result").val(result);
}); 
$(document).on("click","#multiplicacao", function(){
    var valor1 = parseInt($("#valor1").val());
    var valor2 = parseInt($("#valor2").val());
    
    var result = valor1 * valor2;
    $("#result").val(result);
}); 
$(document).on("click","#divisao", function(){
    var valor1 = parseInt($("#valor1").val());
    var valor2 = parseInt($("#valor2").val());
    
    var result = valor1 / valor2;
    $("#result").val(result);
}); 

