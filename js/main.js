document.addEventListener('DOMContentLoaded', function () {
	const scrollDownBtn = document.querySelector('.scroll-down-btn');
	const scrollUpBtn = document.querySelector('.scroll-up-btn');

	function showScrollUpBtnClick() {
		scrollUpBtn.classList.add('active');
	}
	function hideScrollUpBtnClick() {
		scrollUpBtn.classList.remove('active');
	}
	function showHideScrollUpBtnScroll() {
		if (window.pageYOffset > 250) {
			scrollUpBtn.classList.add('active');
		} else {
			scrollUpBtn.classList.remove('active');
		}
	}
	scrollDownBtn.addEventListener('click', showScrollUpBtnClick);
	scrollUpBtn.addEventListener('click', hideScrollUpBtnClick);
	window.addEventListener('scroll', showHideScrollUpBtnScroll);
});

const onBtn = document.querySelector('.on');
const offBtn = document.querySelector('.off');
offBtn.addEventListener('click', function () {
	if (onBtn.classList.contains('active')) {
		onBtn.classList.remove('active');
		offBtn.classList.add('active');
	}
});
onBtn.addEventListener('click', function () {
	if (offBtn.classList.contains('active')) {
		offBtn.classList.remove('active');
		onBtn.classList.add('active');
	}
});

const payPalBtn = document.querySelector('.pay-pal-btn');
const visaBtn = document.querySelector('.visa-btn');
payPalBtn.addEventListener('click', function () {
	if (visaBtn.classList.contains('active')) {
		visaBtn.classList.remove('active');
		payPalBtn.classList.add('active');
	} else {
		payPalBtn.classList.toggle('active');
	}
});
visaBtn.addEventListener('click', function () {
	if (payPalBtn.classList.contains('active')) {
		payPalBtn.classList.remove('active');
		visaBtn.classList.add('active');
	} else {
		visaBtn.classList.toggle('active');
	}
});

const goPayBtn = document.querySelector('#go-pay-btn');
goPayBtn.addEventListener('click', () => {
	if (payPalBtn.classList.contains('active')) {
		window.open('https://www.paypal.com/pl/home');
	} else if (visaBtn.classList.contains('active')) {
		window.open('https://www.visa.pl/');
	} else {
		alert('Wybierz metodę płatności');
	}
});
