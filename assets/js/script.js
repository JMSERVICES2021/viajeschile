

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $('#enviarCorreo').on('click', function() {
        alert("El correo fue enviado correctamente...");
    });
});

    $(document).ready(function(){
    $("#quienessomos").dblclick(function(){
        $(this).hide('slow');
    });
   
    $("#quienessomos").click(function(){
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });
   
    $("#quienessomoss").hover(function(){
        $(this).html("<a href='#'>Me convertí en un enlace</a>");
    }, function() {
        $(this).html("RECETAS RELACIONADAS");
    });
});


