$(document).ready(function(){
    //console.log(document.querySelector('header button'));
    //console.log($('header button'));
    

    document.querySelector('header button').addEventListener('click',function(){

    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('header button').click(function(){
        //alert('Expandir Formulario')
        $('form').slideDown();
    })

    $('form').on('submit',function(e){
       
        e.preventDefault();
        const endereconovaimagem = $('#endereco-imagem-nova').val();
        const novaitem = $('<li style="display:none"></li>');
        $(`<p>${endereconovaimagem}</p>`).appendTo(novaitem);

        $(novaitem).appendTo('ul');
        $(novaitem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
       
    });
})