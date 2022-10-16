let url="dados/data.xml";

$.ajax(url)
    .done(function(xml){
        $(xml).find("signos").each(function(){
            $("#cards").append(`<div class"card"> 
                                alert(<p class="signoNome"> ${(this).find("nome").text()} </p> )` );
        });
    })
    .fail(function () {
        alert("Ocorreu um erro na leitura do arquivo XML.")
    } ) ;