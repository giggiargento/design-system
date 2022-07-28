// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la p�gina est� corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la p�gina, ejecuto la funci�n que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
//Top Nav
    $('#navLoader').load('../webComponents/topNav.html', function() {
        $('topNav').unwrap();
    })

//Footer
    $('#footerLoader').load('../webComponents/footer.html', function() {
        $('footer').unwrap();
    })

//Side Nav
    $('#sideNavLoader').load('../webComponents/sideNav.html', function() {
        $('sideNav').unwrap();
    })

//Section Btn
    $('#sectionBtnLoader1').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader2').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader3').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader4').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader5').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader6').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader7').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader8').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

    $('#sectionBtnLoader9').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
    })

//Main Cards
    $('#mainCardsLoader1').load('../webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
    }) 
    $('#mainCardsLoader2').load('../webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
    }) 
})

