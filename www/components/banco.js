$(document).on("click", "#enviar", function () {
  var parametros = {
    "nome": $("#nome").val(),
    "cpf": $("#cpf").val()
  };
  $.ajax({
    type: "post",
    url: "https://crudmobile-negresko.c9users.io/cadastro.php",
    data: parametros,
    success: function (data) {
      $("nome").val("");
      $("cpf").val("");
      navigator.notification.alert(data);
    }, error: function (data) {
      navigator.notification.alert("erro " + data);
    }
  });
});

$(document).on("click", "#listar", function () {
  $(location).attr("href", "listar.html");
});

function preencherpessoa() {
  $.ajax({
    type: "post",
    url: "https://crudmobile-negresko.c9users.io/listar.php",
    dataType: "json",
    success: function (data) {
      var itemlista = "";
      $.each(data.pessoas, function (i, dados) {
        itemlista += "<option value='" + dados.codigo + "'>" + dados.nome + "</option>";
        $("#lista").html(itemlista);
      });
    }, error: function (data) {
      navigator.notification.alert("erro " + data);
    }
  });
}

$(document).on("change", "#lista", function () {
  var codigoSelecionado = $("option:selected", ("#lista")).val();
  $.ajax({
    type: "get",
    url: "https://crudmobile-negresko.c9users.io/listarum.php",
    data: "codigo=" + codigoSelecionado,
    dataType: "json",
    success: function (data) {
      $.each(data.pessoas, function (i, data) {
        $("#codigo").val(data.codigo);
        $("#nome").val(data.nome);
        $("#cpf").val(data.cpf);
      });
    }, error: function (data) {
      navigator.notification.alert("erro " + data);
    }
  });
});

$(document).on("click", "#deletar", function(){
  var codigoSelecionado = $("option:selected", ("#lista")).val();
  $.ajax({
    type:"get",
    url:"https://crudmobile-negresko.c9users.io/deletar.php",
    data:"codigo="+codigoSelecionado,
    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click", "#salvar", function(){
  var parametros = {
    "codigo": $("#codigo").val(),
    "nome": $("#nome").val(),
    "cpf": $("#cpf").val()
  };
  $.ajax({
    type:"POST",
    url:"https://crudmobile-negresko.c9users.io/atualizar.php",
    data: parametros,
    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click", "#editar", function(){
  habilita();
});

$(document).on("click", "#cancelar", function(){
  desabilita();
  $("nome").val("");
  $("cpf").val("");
});

function desabilita(){
  $('nome').prop('readonly', true);
  $('cpf').prop('readonly', true);
}

function habilita(){
  $('nome').prop('readonly', false);
  $('cpf').prop('readonly', false);
}