// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la página esté corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la página, ejecuto la función que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
    $('#nav-loader').load('../webComponents/topNav.html', function() {
        $('#topNav').unwrap();
    })

    $('#footer-loader').load('../webComponents/footer.html', function() {
        $('footer').unwrap();
    })
})