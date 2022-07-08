// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la p�gina est� corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la p�gina, ejecuto la funci�n que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
    $('#navLoader').load('../webComponents/topNav.html', function() {
        $('#topNav').unwrap();
    })

    $('#footerLoader').load('../webComponents/footer.html', function() {
        $('footer').unwrap();
    })
})