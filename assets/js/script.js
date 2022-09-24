// JAVASCRIPT

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// JQUERY
$('.showPointer').hide();

$(document).ready(function () {
    $('.showPointer').dblclick();
    $('.hideClick').dblclick(function () {
        $('.hideCard').hide();
        $('.showPointer').show();
    })
})

$(document).ready(function () {
    $('.showCards').dblclick(function () {
        $('.hideCard').show();
        $('.showPointer').hide();
    })
})

$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert('El coreo fue enviado correctamente...');
    })
})

$(document).ready(function () {
    $('#ingredientes').dblclick(function () {
        $(this).css({'color': '#e70c0c'});
    })
})

$(document).ready(function () {
    $('#preparacion').dblclick(function () {
        $(this).css({'color': '#e70c0c'});
    })
})