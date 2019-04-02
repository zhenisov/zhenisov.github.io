// MAIN MENU
let mainMenu = document.querySelectorAll('.nav__link');
mainMenu.forEach(function(item, i, mainMenu){
	item.onclick = function(){
		let active = document.querySelector('.nav__link.active');
		active.classList.remove('active');
		this.classList.add('active');
	}
})

// MOBILE-MENU

let mobileButton = document.querySelector('.mobile');
mobileButton.onclick = function() {
	let showMenu = document.querySelector('.menu');
	showMenu.classList.add('show');  
}
let closeButton = document.querySelector('.close-btn');
closeButton.onclick = function() {
    let lol = document.querySelector('.menu.show');
    lol.classList.remove('show');
}