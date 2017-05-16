import $ from 'jquery'; 


class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-nav__menu-button");
		this.menuContent = $(".site-nav__menu--container-ul");
		this.menuLiContainer = $(".site-nav__menu--container-li");
		this.events();
	}

	// listening for these events. Event Handler
	// we want the page to be listening for these events as soon as the page loads. done with this.events() in the constructor
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		// console.log(this);
	}


	toggleTheMenu() {
		console.log("deratr");
		this.menuContent.toggleClass("site-nav__menu--container-ul--visible");
		this.menuLiContainer.toggleClass("site-nav__menu--container-li--mobile");
		this.menuIcon.toggleClass("site-nav__menu-button--close-x");
	}


}

// removing the class if the user has it open and then changes their viewport width
$(window).resize(function () {
	var viewportWidth = $(window).width();
	if (viewportWidth > 880) {
		$(".site-nav__menu--container-ul").removeClass("site-nav__menu--container-ul--visible");
		$(".site-nav__menu--container-li").removeClass("site-nav__menu--container-li--mobile");
		
	}
});

export default MobileMenu;