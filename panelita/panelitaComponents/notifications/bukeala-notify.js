(function ( $ ) {
	
	$.bukealaNotify = function( options ) {
		// This is the easiest way to have default options.
		var settings = this.extend({
			// These are the defaults.
			//icon: save-icon / warning-icon / wifi-icon / info-icon / delete-icon / success-icon / block-icon / error-icon
			icon: 'save-icon',
			title: '',
			message: '',
			/*action: {
				id: '',
				onclick: '',
				name: '',  // texto que aparece en el botón
				closeOnClick: true // el botón cierra la notificación en click
			}*/
			action1: '',
			action2: '',
			allowDismiss: '',
			type: '',
			delay: 0
		}, options );
		
		var btn1 = getNotifyBtn(settings.action1);
		var btn2 = getNotifyBtn(settings.action2);
		var notifyType = btn1 == '' && btn2 == '' ? 'ptoast' : 'with-actions';

		var template = `<div data-notify="container" class="${notifyType} ${settings.icon}" role="alert">`
			+ ' <div data-notify="content">'
			+ ' <span data-notify="icon"></span>'
			+ ' <div data-notify="text">'
			+ '<span data-notify="title" class="h300">{1}</span>'
			+ ' <span data-notify="message" class="h100">{2}</span>'
			+ ' </div>';
		
		if(btn1 != '' && btn2 != '') {
			template += ' <div class="actions">'
			+ btn1
			+ btn2
			+ ' </div>';
			
		} else if(btn1 != '') {
			template += '<div class="actions actions-single">'
			+ btn1
			+ ' </div>';
		} else if(btn2 != '') {
			template += '<div class="actions actions-single">'
			+ btn2
			+ ' </div>';
		}
		
		template += ' </div>'
		+ ' </div>';
		
		// Creates the notify.
		return this.notify({
			icon: settings.icon,
			title: settings.title,
			message: settings.message
			
		},{
			type: settings.type,
			delay: settings.delay,
			icon_type: 'class',
			allow_dismiss: settings.allowDismiss,
			allow_duplicates: false,
			onShown:function(){document.addEventListener("click", clickOutsideListener)},
			onClosed:function(){document.removeEventListener("click", clickOutsideListener)},
			template: template,
			animate: {
				enter: 'animated slideInRight',
				exit: 'animated slideOutRight'
			},
		});
		
		
	};
	
}(jQuery));

function getNotifyBtn(action) {
	var html = '';
	if(action != '') {
		if(!action.closeOnClick && !isDeleteBtn(action)) {
			html = '<a id="' + action.id + '" class="action pbtn btn-primary" onclick="' + action.onclick + '">' + action.name + '</a>';
		}
		else if(!action.closeOnClick && isDeleteBtn(action)) {
			html = '<a id="' + action.id + '" class="action pbtn btn-red" onclick="' + action.onclick + '">' + action.name + '</a>';
		}
		else if(action.closeOnClick === true) {
			html = '<a id="' + action.id + '" class="action pbtn btn-secondary" onclick="' + action.onclick + '" data-notify="dismiss">'+ action.name + '</a>';
		}
	}
	
	return html;
}

function isDeleteBtn(btn) {
	return btn.name.toLowerCase().includes('delete');
}
