import $ from 'jquery'; 


class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-nav__menu-button");
		this.menuContent = $(".site-nav__menu--container-ul");
		this.events();
	}

	// listening for these events. Event Handler
	// we want the page to be listening for these events as soon as the page loads. done with this.events() in the constructor
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		// console.log(this);
	}


	toggleTheMenu() {
		console.log("");
		this.menuContent.toggleClass("site-nav__menu--container-ul--visible");
	}


}

// removing the class if the user has it open and then changes their viewport width
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 880) {
            $(".site-nav__menu--container-ul").removeClass("site-nav__menu--container-ul--visible");
    }
});

export default MobileMenu;