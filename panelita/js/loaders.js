// IMPORTANTE: mientras estemos trabajando localmente, estas funciones no van a andar a menos que la p�gina est� corriendo en un server, usar 'Open with Live Server' en Code para verlo

// cuando carga la p�gina, ejecuto la funci�n que trae lo que haya en topNav.html, lo inserta en el div#nav-loader y borra ese div contenedor
// lo mismo con el footer

$(document).ready(function() {
//Top Nav
    $('#navLoader').load('/panelita/webComponents/topNav.html', function() {
        $('#topNav').unwrap();
        activateTopNavLink();
        triggerLoaded($(this));
    })

//Footer
    $('#footerLoader').load('/panelita/webComponents/footer.html', function() {
        $('footer').unwrap();
        triggerLoaded($(this));
    })

//Side Nav
    $('#sideNavBrand').load('/panelita/webComponents/sideNavBrand.html', function() {
        $('sideNav').unwrap();
        activateSideNavLink();
        triggerLoaded($(this));
    })

    $('#sideNavFoundations').load('/panelita/webComponents/sideNavFoundations.html', function() {
        $('sideNav').unwrap();
        activateSideNavLink();
        triggerLoaded($(this));
    })

    $('#sideNavComponents').load('/panelita/webComponents/sideNavComponents.html', function() {
        $('sideNav').unwrap();
        activateSideNavLink();
        triggerLoaded($(this));
    })

    $('#sideNavPatterns').load('/panelita/webComponents/sideNavPatterns.html', function() {
        $('sideNav').unwrap();
        activateSideNavLink();
        triggerLoaded($(this));
    })

    $('#sideNavResources').load('/panelita/webComponents/sideNavResources.html', function() {
        $('sideNav').unwrap();
        activateSideNavLink();
        triggerLoaded($(this));
    })

//Section Btn Brand
    $('#sectionBtnMission').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Mission");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/mission.svg');
        img.attr('alt', 'Mission');
    })

    $('#sectionBtnPersonality').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Personality");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/personality.svg');
        img.attr('alt', 'Personality');
    })

    $('#sectionBtnPromise').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Promise");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/promise.svg');
        img.attr('alt', 'Promise');
    })

    $('#sectionBtnValues').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Values");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/values.svg');
        img.attr('alt', 'Values');
    })

//Section Btn Foundations
    $('#sectionBtnGrids').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Grids");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/grids.svg');
        img.attr('alt', 'Grids');
    })

    $('#sectionBtnIcons').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Icons");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/icons.svg');
        img.attr('alt', 'Icons');
    })

    $('#sectionBtnTypography').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Typography");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/typography.svg');
        img.attr('alt', 'Typography');
    })

    $('#sectionBtnColors').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Colors");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/colors.svg');
        img.attr('alt', 'Colors');
    })

    $('#sectionBtnIllustrations').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Illustrations");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/illustrations.svg');
        img.attr('alt', 'Illustrations');
    })

//Section Btn Components
    $('#sectionBtnButtons').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Buttons");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/buttons.svg');
        img.attr('alt', 'Buttons');
        triggerLoaded($(this));
    })

    $('#sectionBtnCalendar').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Calendar");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/calendar.svg');
        img.attr('alt', 'Calendar');
        triggerLoaded($(this));
    })

    $('#sectionBtnCards').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Cards");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/cards.svg');
        img.attr('alt', 'Cards');
        triggerLoaded($(this));
    })

    $('#sectionBtnCheckbox').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Checkbox");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/checkbox.svg');
        img.attr('alt', 'Checkbox');
        triggerLoaded($(this));
    })

    $('#sectionBtnDropdowns').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Dropdowns");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/dropdowns.svg');
        img.attr('alt', 'Dropdowns');
        triggerLoaded($(this));
    })

    $('#sectionBtnForms').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Form");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/forms.svg');
        img.attr('alt', 'Form');
        triggerLoaded($(this));
    })

    $('#sectionBtnInputs').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Inputs");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/inputs.svg');
        img.attr('alt', 'Inputs');
        triggerLoaded($(this));
    })

    $('#sectionBtnNavigation').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Navigation");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/navigation.svg');
        img.attr('alt', 'Navigation');
        triggerLoaded($(this));
    })

    $('#sectionBtnNotifications').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Notifications");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/notifications.svg');
        img.attr('alt', 'Notifications');
        triggerLoaded($(this));
    })

    $('#sectionBtnPagination').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Pagination");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/pagination.svg');
        img.attr('alt', 'Pagination');
        triggerLoaded($(this));
    })

    $('#sectionBtnRadio').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Radio");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/radio.svg');
        img.attr('alt', 'Radio');
        triggerLoaded($(this));
    })

    $('#sectionBtnSelect').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Select");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/select.svg');
        img.attr('alt', 'Select');
        triggerLoaded($(this));
    })

    $('#sectionBtnSidesheet').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Sidesheet");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/sidesheet.svg');
        img.attr('alt', 'Sidesheet');
        triggerLoaded($(this));
    })

    $('#sectionBtnSwitch').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Switch");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/switch.svg');
        img.attr('alt', 'Switch');
        triggerLoaded($(this));
    })

    $('#sectionBtnTable').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Table");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/table.svg');
        img.attr('alt', 'Table');
        triggerLoaded($(this));
    })

    $('#sectionBtnTabs').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tabs");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/tabs.svg');
        img.attr('alt', 'Tabs');
        triggerLoaded($(this));
    })

    $('#sectionBtnTags').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tags");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/tags.svg');
        img.attr('alt', 'Tags');
        triggerLoaded($(this));
    })

    $('#sectionBtnTooltip').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Tooltip");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/tooltip.svg');
        img.attr('alt', 'Tooltip');
        triggerLoaded($(this));
    })

//Section Btn Patterns
    $('#sectionBtnEmptyStates').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Empty States");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/emptyStates.svg');
        img.attr('alt', 'Empty States');
    })

    $('#sectionBtnForms').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Forms");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/forms.svg');
        img.attr('alt', 'Forms');
    })

    $('#sectionBtnMessages').load('/panelita/webComponents/sectionBtn.html', function() {
        $('sectionBtn').unwrap();
        const p = $(this).find('p.card-text');
        p.text("Messages");
        const img = $(this).find('img.card-img-top');
        img.attr('src', '/panelita/assets/icons/messages.svg');
        img.attr('alt', 'Messages');
    })

//Main Cards
    $('#mainCardMission').load('/panelita/webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
        triggerLoaded($(this));
        const h5 = $(this).find('#cardTitle');
        h5.text("Mission");
        const p = $(this).find('#cardText');
        p.text("Bukeala is based on Panelita visual design language principles and helps designers and developers maintain brand consistency across projects and design assets.");
        const a = $(this).find('#cardLink');
        a.attr('href', '/panelita/brand/mission.html');
    }) 

    $('#mainCardPromise').load('/panelita/webComponents/mainCards.html', function() {
        $('mainCards').unwrap();
        triggerLoaded($(this));
        const h5 = $(this).find('#cardTitle');
        h5.text("Promise");
        const p = $(this).find('#cardText');
        p.text("We are here to help create effective, aesthetically appealing and meaningful products that can help others teams build a unique system.");
        const a = $(this).find('#cardLink');
        a.attr('href', '/panelita/brand/promise.html');
    }) 

//Download Cards
    $('#downloadCardLoader').load('/panelita/webComponents/downloadCards.html', function() {
        $('downloadCard').unwrap();
        triggerLoaded($(this));
    }) 

//Code box
    $('#codeBoxLoader').load('/panelita/webComponents/codeBox.html', function() {
        $('codeBox').unwrap();
        triggerLoaded($(this));
    })

    // agrega id dinámicamente a cada code box
    const codeBoxesAmount = $('.codeBox').length;
    console.log(codeBoxesAmount)
    for (var i = 0; i <= codeBoxesAmount; i++) {
        $($('.codeBox')[i]).attr('id', `codeBox${i}`)
    }
})

//Panelita components
    //Buttons
    $('#primaryButtonLoader').load('/panelita/panelitaComponents/primaryButton.html', function() {
        $('primaryButton').unwrap();
        triggerLoaded($(this));
    })

    $('#secondaryButtonLoader').load('/panelita/panelitaComponents/secondaryButton.html', function() {
        $('secondaryButton').unwrap();
        triggerLoaded($(this));
    })

    $('#errorButtonLoader').load('/panelita/panelitaComponents/errorButton.html', function() {
        $('errorButton').unwrap();
        triggerLoaded($(this));
    })


    //Checkbox
    $('#checkboxLoader').load('/panelita/panelitaComponents/checkbox.html', function() {
        $('checkbox').unwrap();
        triggerLoaded($(this));
    })

    
    //Radio
    $('#radioLoader').load('/panelita/panelitaComponents/radio.html', function() {
        $('radio').unwrap();
        triggerLoaded($(this));
    })


    //Select
    $('#selectLoaderSearch').load('/panelita/panelitaComponents/selectSearch.html', function() {
        triggerLoaded($(this));
        
        $('select').chosen();
    })

    $('#selectLoaderNoSearch').load('/panelita/panelitaComponents/selectNoSearch.html', function() {
        triggerLoaded($(this));
        
        $('select').chosen();
    })

    $('#selectLoaderMultiple').load('/panelita/panelitaComponents/selectMultiple.html', function() {
        triggerLoaded($(this));
        
        $('select').chosen();
    })

    // Timepicker
    $('#timePicker').load('/panelita/panelitaComponents/timepicker.html', function() {
        triggerLoaded($(this));

        $('input.time').timepicker();
    })

    $('#timeToTimePicker').load('/panelita/panelitaComponents/timeToTimePicker.html', function() {
        triggerLoaded($(this));

        $('input.time').timepicker();
    })

    // Datepicker
    $('#datePicker').load('/panelita/panelitaComponents/datePicker.html', function() {
        triggerLoaded($(this));

        $('#datepicker-single').datepicker({showOtherMonths: true});
        $('#datepicker-double').datepicker({numberOfMonths: [1, 2]});
    })

    $('#dateToDatePicker').load('/panelita/panelitaComponents/dateToDatePicker.html', function() {
        triggerLoaded($(this));

        $('input.date').datepicker({showOtherMonths: true});
    })
    

    //Inputs
    $('#inputGeneralLoader').load('/panelita/panelitaComponents/inputGeneral.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputGeneralDisabledLoader').load('/panelita/panelitaComponents/inputGeneralDisabled.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputGeneralErrorLoader').load('/panelita/panelitaComponents/inputGeneralError.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputLabelLoader').load('/panelita/panelitaComponents/inputLabel.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldLoader').load('/panelita/panelitaComponents/inputField.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldDisabledLoader').load('/panelita/panelitaComponents/inputFieldDisabled.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldErrorLoader').load('/panelita/panelitaComponents/inputFieldError.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldLabelLoader').load('/panelita/panelitaComponents/inputFieldLabel.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldLabelDisabledLoader').load('/panelita/panelitaComponents/inputFieldLabelDisabled.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputFieldLabelErrorLoader').load('/panelita/panelitaComponents/inputFieldLabelError.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSearchLoader').load('/panelita/panelitaComponents/inputSearch.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSearchDisabledLoader').load('/panelita/panelitaComponents/inputSearchDisabled.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSearchErrorLoader').load('/panelita/panelitaComponents/inputSearchError.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSelectFileLoader').load('/panelita/panelitaComponents/inputSelectFile.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSelectFileDisabledLoader').load('/panelita/panelitaComponents/inputSelectFileDisabled.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    $('#inputSelectFileErrorLoader').load('/panelita/panelitaComponents/inputSelectFileError.html', function() {
        $('inputs').unwrap();
        triggerLoaded($(this));
    })

    // Form
    $('#formLoader').load('/panelita/panelitaComponents/forms.html', function() {
        $('forms').unwrap();
        triggerLoaded($(this));

        $('input.date').datepicker({showOtherMonths: true});
        $('input.time').timepicker();
    })

    // Dropdowns
    $('#dropdownMenuLoader').load('/panelita/panelitaComponents/dropdown.html', function() {
        $('dropdown').unwrap();
        triggerLoaded($(this));
    })

    // Tags
    $('#tagsLoader').load('/panelita/panelitaComponents/tag.html', function() {
        $('tags').unwrap();
        triggerLoaded($(this));
    })

    $('#tagRemovableLoader').load('/panelita/panelitaComponents/tagRemovable.html', function() {
        $('tags').unwrap();
        triggerLoaded($(this));
    })

    $('#tagIconLoader').load('/panelita/panelitaComponents/tagIcon.html', function() {
        $('tags').unwrap();
        triggerLoaded($(this));
    })

    // Switch
    $('#switchLoader').load('/panelita/panelitaComponents/switch.html', function() {
        $('switch').unwrap();
        triggerLoaded($(this));
    })

    // Navigation
    $('#navigationHeaderLoader').load('/panelita/panelitaComponents/navigation-header.html', function() {
        $('navigation').unwrap();
        triggerLoaded($(this));
    })

    $('#sidebarLoader').load('/panelita/panelitaComponents/navigation-sidebar.html', function() {
        $('navigation').unwrap();
        triggerLoaded($(this));
    })

    // Calendar
    $('#calendarLoader').load('/panelita/panelitaComponents/calendar.html', function() {
        $('calendar').unwrap();
        triggerLoaded($(this));
        
        $('input.date').datepicker({showOtherMonths: true});
    })

    // Cards
    $('#cardLoader').load('/panelita/panelitaComponents/cards.html', function() {
        $('card').unwrap();
        triggerLoaded($(this));
    })

    $('#cardSecondaryLoader').load('/panelita/panelitaComponents/cardSecondary.html', function() {
        $('card').unwrap();
        triggerLoaded($(this));
    })

    // Tabs
    $('#tabStatesLoader').load('/panelita/panelitaComponents/tabStates.html', function() {
        $('tabs').unwrap();
        triggerLoaded($(this));
    })

    $('#tabsGroupLoader').load('/panelita/panelitaComponents/tabsGroup.html', function() {
        $('tabs').unwrap();
        triggerLoaded($(this));
    })
    
    // Pagination
    $('#paginationLoader').load('/panelita/panelitaComponents/pagination.html', function() {
        $('pagination').unwrap();
        triggerLoaded($(this));
    })
    
    // Table
    $('#tablePageHeaderLoader').load('/panelita/panelitaComponents/tablePageHeader.html', function() {
        $('table').unwrap();
        triggerLoaded($(this));
    })

    $('#tableNavigationLoader').load('/panelita/panelitaComponents/tableNavigation.html', function() {
        $('table').unwrap();
        $('#table-header').DataTable({
            orderCellsTop: true,
            colReorder: false,
            dom: "<t>",
            autoWidth: true
        });
        triggerLoaded($(this));
    })

    $('#tableLoader').load('/panelita/panelitaComponents/table.html', function() {
        triggerLoaded($(this));
        $('#table').DataTable({
          orderCellsTop: true,
          colReorder: false,
          dom: "<t>",
          autoWidth: true
        });
    })

    $('#fullTableLoader').load('/panelita/panelitaComponents/full-table.html', function() {

        $('#full-table').DataTable({
            orderCellsTop: true,
            colReorder: false,
            dom: "<t>p",
            autoWidth: true,
            pageLength: 4
        });
        triggerLoaded($(this));
    })

// end panelita components


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
