function insertar(num){
    if(num === (".") && $('.pantalla').val().includes(".")){

    }else{
        var valor = $('.pantalla').val();
        $('.pantalla').val(valor+num);
    }
    
}

function borrar(){
    $('.pantalla').val("");
}

function igual(){
    $('.pantalla').val(eval($('.pantalla').val()));
}

function eliminar(){
    var valor = $('.pantalla').val();
    $('.pantalla').val(valor.substring(0,valor.length-1));
}