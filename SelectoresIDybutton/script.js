// let button = document.getElementById('button');
// button.addEventListener('click', function(){
//  alert('click sobre el botón');
// });

$(document).ready(function () {
    let button = $('#btn');
    button.on('click', function () {
        alert('click sobre el botón');
    })

    // Seleccionar con ID 
    let titulo_1 = $('#titulo_1');
    console.log(titulo_1);

    let titulo_2 = $('#titulo_2');
    console.log(titulo_2);

    let texto_1 = $('#texto_1');
    console.log(texto_1);

    let btn_1 = $('#btn');
    console.log(btn_1);

});

// Seleccionar 
