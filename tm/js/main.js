// MAIN MENU
let mainMenu = document.querySelectorAll('.nav__link');
mainMenu.forEach(function(item, i, mainMenu){
	item.onclick = function(){
		let active = document.querySelector('.nav__link.active');
		active.classList.remove('active');
		this.classList.add('active');
	}
})

// REQUEST FORM

function request_form() {
	$('#request-form').show();
	$('.request-form__wrapper').css("top", "100px");
}

function request_form_close() {
	$('#request-form').hide();
	$('.request-form__wrapper').css("top", "-900px");
}

function formSuccess(data) {
	$(".request-form__body").html(data);
}

function form_submit() {
	sendForm('request-form__body', 'form_zayavka', 'mail.php');
	return false;
}

function sendForm(result_form, ajax_form, url) {
	$.ajax({
		url: url,
		type: "POST",
		dataType: "html",
		data: $("#" + ajax_form).serialize(),
		success: formSuccess,
		error: function (response) {
			$(".request-form__body").html('<h2 class="request-fail">Ошибка. Попробуйте позже!</h2>');
		}
	});
}

function refreshForm (data) {
	$('.request-form__body').html(data);
}

function retryForm () {
	$.ajax ({
		url: "retrymail.php",
		type: "POST",
		data: {},
		dataType: "html",
		success: refreshForm
	});
}

// REPAIR DESCRIPTION

function repairDescription() {
	$('#repairDescription').show();
	$('.repairDescription__wrapper').css("top", "100px");
}

function repairDescription_close() {
	$('#repairDescription').hide();
	$('.repairDescription__wrapper').css("top", "-900px");
}