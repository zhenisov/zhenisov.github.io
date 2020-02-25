// MAIN MENU
let mainMenu = document.querySelectorAll('.nav__link');
mainMenu.forEach(function (item, i, mainMenu) {
	item.onclick = function () {
		let active = document.querySelector('.nav__link.active');
		active.classList.remove('active');
		this.classList.add('active');
	}
})

// FOOD MENU
let foodMenu = document.querySelectorAll('.menu__link');
foodMenu.forEach(function (item, i, foodMenu) {
	item.onclick = function () {
		let active = document.querySelector('.menu__link.active');
		active.classList.remove('active');
		this.classList.add('active');
	}
})

// FIXED MENU

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.querySelector('.fixed__nav').style.top = "0";
	} else {
		document.querySelector('.fixed__nav').style.top = "-305px";
	}
}

// SHOP

let shop = document.getElementById('shopping_basket');
shop.onclick = function () {
	document.querySelector('.shopping-basket').style.top = "170px";
}

let shop2 = document.getElementById('shopping_basket2');
shop2.onclick = function () {
	document.querySelector('.shopping-basket').style.top = "170px";
}

let closeButton = document.querySelector('.close-btn');
closeButton.onclick = function () {
	document.querySelector('.shopping-basket').style.top = "-600px";
}

