// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la p�gina est� corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la p�gina, ejecuto la funci�n que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
//Top Nav
    $('#navLoader').load('../webComponents/topNav.html', function() {
        $('#topNav').unwrap();
    })

//Footer
    $('#footerLoader').load('../webComponents/footer.html', function() {
        $('footer').unwrap();
    })

//Side Nav
    $('#sideNavBrand').load('../webComponents/sideNavBrand.html', function() {
        $('sideNav').unwrap();
    })

    $('#sideNavFoundations').load('../webComponents/sideNavFoundations.html', function() {
        $('sideNav').unwrap();
    })

    $('#sideNavComponents').load('../webComponents/sideNavComponents.html', function() {
        $('sideNav').unwrap();
    })

    $('#sideNavPatterns').load('../webComponents/sideNavPatterns.html', function() {
        $('sideNav').unwrap();
    })

    $('#sideNavResources').load('../webComponents/sideNavResources.html', function() {
        $('sideNav').unwrap();
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
    })

    $('#sectionBtnCalendar').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Calendar");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/calendar.svg');
        img.attr('alt', 'Calendar');
    })

    $('#sectionBtnCards').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Cards");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/cards.svg');
        img.attr('alt', 'Cards');
    })

    $('#sectionBtnCheckbox').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Checkbox");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/checkbox.svg');
        img.attr('alt', 'Checkbox');
    })

    $('#sectionBtnDropdowns').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Dropdowns");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/dropdowns.svg');
        img.attr('alt', 'Dropdowns');
    })

    $('#sectionBtnForms').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Forms");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/forms.svg');
        img.attr('alt', 'Forms');
    })

    $('#sectionBtnNavigation').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Navigation");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/navigation.svg');
        img.attr('alt', 'Navigation');
    })

    $('#sectionBtnNotifications').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Notifications");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/notifications.svg');
        img.attr('alt', 'Notifications');
    })

    $('#sectionBtnPagination').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Pagination");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/pagination.svg');
        img.attr('alt', 'Pagination');
    })

    $('#sectionBtnRadio').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Radio");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/radio.svg');
        img.attr('alt', 'Radio');
    })

    $('#sectionBtnSelect').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Select");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/select.svg');
        img.attr('alt', 'Select');
    })

    $('#sectionBtnSidesheet').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Sidesheet");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/sidesheet.svg');
        img.attr('alt', 'Sidesheet');
    })

    $('#sectionBtnSwitch').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Switch");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/switch.svg');
        img.attr('alt', 'Switch');
    })

    $('#sectionBtnTable').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Table");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/table.svg');
        img.attr('alt', 'Table');
    })

    $('#sectionBtnTabs').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tabs");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tabs.svg');
        img.attr('alt', 'Tabs');
    })

    $('#sectionBtnTags').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tags");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tags.svg');
        img.attr('alt', 'Tags');
    })

    $('#sectionBtnTooltip').load('../webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tooltip");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/content/assets/icons/tooltip.svg');
        img.attr('alt', 'Tooltip');
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
    }) 
    $('#mainCardsLoader2').load('../webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
    }) 

    //Download Cards
    $('#downloadCardLoader').load('../webComponents/downloadCards.html', function() {
        $('downloadCard').unwrap();
    }) 

    //Code box
    $('#codeBoxLoader').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
    }) 

    $('#codeBoxLoader2').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
    }) 

    $('#codeBoxLoader3').load('../webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
    }) 
})

//Funcion tooltips
    $(window).on('load', function() {
        initTooltips();
    })

