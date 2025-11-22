const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('.navigation');


menuButton.addEventListener('click', function(){
	console.log("Clicked on hamburger button")
	menuButton.classList.toggle('open');
	navMenu.classList.toggle('open');
	
}); 

