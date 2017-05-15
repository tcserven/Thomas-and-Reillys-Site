import $ from 'jquery'; 


class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-nav__menu-button");
		this.events();
	}

	// listening for these events. Event Handler
	// we want the page to be listening for these events as soon as the page loads. done with this.events() in the constructor
	events() {
		this.menuIcon.click(this.toggleTheMenu);
	}


	toggleTheMenu() {
		console.log('Horray');
	}
}



export default MobileMenu;