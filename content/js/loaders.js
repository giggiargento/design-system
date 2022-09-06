// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la p�gina est� corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la p�gina, ejecuto la funci�n que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
//Top Nav
    $('#navLoader').load('../webComponents/topNav.html', function() {
        $('#topNav').unwrap();
        triggerLoaded($(this));
    })

//Footer
    $('#footerLoader').load('../webComponents/footer.html', function() {
        $('footer').unwrap();
        triggerLoaded($(this));
    })

//Side Nav
    $('#sideNavBrand').load('../webComponents/sideNavBrand.html', function() {
        $('sideNav').unwrap();
        triggerLoaded($(this));
    })

    $('#sideNavFoundations').load('../webComponents/sideNavFoundations.html', function() {
        $('sideNav').unwrap();
        triggerLoaded($(this));
    })

    $('#sideNavComponents').load('../webComponents/sideNavComponents.html', function() {
        $('sideNav').unwrap();
        triggerLoaded($(this));
    })

    $('#sideNavPatterns').load('../webComponents/sideNavPatterns.html', function() {
        $('sideNav').unwrap();
        triggerLoaded($(this));
    })

    $('#sideNavResources').load('../webComponents/sideNavResources.html', function() {
        $('sideNav').unwrap();
        triggerLoaded($(this));
    })

//Section Btn Brand
    $('#sectionBtnMission').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Mission");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/mission.svg');
        img.attr('alt', 'Mission');
    })

    $('#sectionBtnPersonality').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Personality");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/personality.svg');
        img.attr('alt', 'Personality');
    })

    $('#sectionBtnPromise').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Promise");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/promise.svg');
        img.attr('alt', 'Promise');
    })

    $('#sectionBtnValues').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Values");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/values.svg');
        img.attr('alt', 'Values');
    })

//Section Btn Foundations
    $('#sectionBtnGrids').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Grids");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/grids.svg');
        img.attr('alt', 'Grids');
    })

    $('#sectionBtnIcons').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Icons");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/icons.svg');
        img.attr('alt', 'Icons');
    })

    $('#sectionBtnTypography').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Typography");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/typography.svg');
        img.attr('alt', 'Typography');
    })

    $('#sectionBtnColors').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Colors");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/colors.svg');
        img.attr('alt', 'Colors');
    })

    $('#sectionBtnIllustrations').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Illustrations");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/illustrations.svg');
        img.attr('alt', 'Illustrations');
    })

//Section Btn Components
    $('#sectionBtnButtons').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Buttons");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/buttons.svg');
        img.attr('alt', 'Buttons');
        triggerLoaded($(this));
    })

    $('#sectionBtnCalendar').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Calendar");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/calendar.svg');
        img.attr('alt', 'Calendar');
        triggerLoaded($(this));
    })

    $('#sectionBtnCards').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Cards");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/cards.svg');
        img.attr('alt', 'Cards');
        triggerLoaded($(this));
    })

    $('#sectionBtnCheckbox').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Checkbox");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/checkbox.svg');
        img.attr('alt', 'Checkbox');
        triggerLoaded($(this));
    })

    $('#sectionBtnDropdowns').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Dropdowns");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/dropdowns.svg');
        img.attr('alt', 'Dropdowns');
        triggerLoaded($(this));
    })

    $('#sectionBtnForms').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Forms");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/forms.svg');
        img.attr('alt', 'Forms');
        triggerLoaded($(this));
    })

    $('#sectionBtnNavigation').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Navigation");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/navigation.svg');
        img.attr('alt', 'Navigation');
        triggerLoaded($(this));
    })

    $('#sectionBtnNotifications').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Notifications");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/notifications.svg');
        img.attr('alt', 'Notifications');
        triggerLoaded($(this));
    })

    $('#sectionBtnPagination').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Pagination");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/pagination.svg');
        img.attr('alt', 'Pagination');
        triggerLoaded($(this));
    })

    $('#sectionBtnRadio').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Radio");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/radio.svg');
        img.attr('alt', 'Radio');
        triggerLoaded($(this));
    })

    $('#sectionBtnSelect').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Select");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/select.svg');
        img.attr('alt', 'Select');
        triggerLoaded($(this));
    })

    $('#sectionBtnSidesheet').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Sidesheet");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/sidesheet.svg');
        img.attr('alt', 'Sidesheet');
        triggerLoaded($(this));
    })

    $('#sectionBtnSwitch').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Switch");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/switch.svg');
        img.attr('alt', 'Switch');
        triggerLoaded($(this));
    })

    $('#sectionBtnTable').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Table");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/table.svg');
        img.attr('alt', 'Table');
        triggerLoaded($(this));
    })

    $('#sectionBtnTabs').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tabs");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tabs.svg');
        img.attr('alt', 'Tabs');
        triggerLoaded($(this));
    })

    $('#sectionBtnTags').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tags");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tags.svg');
        img.attr('alt', 'Tags');
        triggerLoaded($(this));
    })

    $('#sectionBtnTooltip').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tooltip");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tooltip.svg');
        img.attr('alt', 'Tooltip');
        triggerLoaded($(this));
    })

//Section Btn Patterns
    $('#sectionBtnEmptyStates').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Empty States");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/emptyStates.svg');
        img.attr('alt', 'Empty States');
    })

    $('#sectionBtnForms').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Forms");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/forms.svg');
        img.attr('alt', 'Forms');
    })

    $('#sectionBtnMessages').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Messages");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/messages.svg');
        img.attr('alt', 'Messages');
    })

//Main Cards
    $('#mainCardsLoader1').load('../webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
        triggerLoaded($(this));
    }) 
    $('#mainCardsLoader2').load('../webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
        triggerLoaded($(this));
    }) 

//Download Cards
    $('#downloadCardLoader').load('../webComponents/downloadCards.html', function() {
        $('downloadCard').unwrap();
        triggerLoaded($(this));
    }) 

//Code box
    $('#codeBoxLoader').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
        triggerLoaded($(this));
    }) 

    $('#codeBoxLoader2').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
        triggerLoaded($(this));
    }) 

    $('#codeBoxLoader3').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
        triggerLoaded($(this));
    }) 
})

var loaderTotal
var loadersLoaded = 0;

$(document).ready(function() {
    // cada vez que carga una pantalla, cuenta cuántos loaders hay
    loaderTotal = $('.loader').length;
});


// cada vez que se carga un loader, suma 1 a la lista de loaders que ya cargaron
function triggerLoaded(el) {
    loadersLoaded += 1;

    // comparo cuántos loaders hay en la página y cuántos ya cargaron, si son el mismo número, inicializo tooltips
    if (loadersLoaded == loaderTotal) {
        initTooltips()
    }
}

