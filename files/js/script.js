
$(window).on('load resize', heightMenu);
let window_size;
let heightUl;

function heightMenu() {
	heightUl = $('ul.header__menu').height()
	window_size = $(window).height() - 90
	if (heightUl > window_size) {
		$('ul.header__menu').css('height', window_size)
	} else {
		$('ul.header__menu').css('height', heightUlStart);
	};
}
$('.drop-down-nomad').click(function (event) {
	$('ul, .drop-down-nomad').toggleClass('active')
})
function showSend() {
	function get_line(value, line) {
		var lines = value.split(/[\n\r]+/);
		return lines[line];
	}

	if (get_line($('#center-footer-input').val(), 0)) {
		$('#center-footer-send-wrapp').addClass('active')
		$('#center-footer-input').css('line-height', 'normal')
	} else {
		$('#center-footer-send-wrapp').removeClass('active')
		$('#center-footer-input').css('line-height', '49px')
	}
}
$("#center-footer-input").keyup(function (event) {
	if (event.keyCode) {
		$(this).val();
		showSend()
	}
});

document.addEventListener("click", function (e) {
	if (e.target.closest('.channels__name')) {
		e.target.closest('.channels__name').classList.add('_active')
		const text = e.target.closest('.channels__name').innerHTML
		document.querySelector('.channels__name._active').classList.remove('_active');
		document.querySelector('.center__title').innerHTML = text.replace(/#\s+/, '#')
		document.querySelector('#center-footer-input').placeholder = 'Message in ' + text.replace(/#\s+/, '#')
	}
});

const heightUlStart = $('ul.header__menu').height() + 10;
