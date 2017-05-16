import $ from "jquery";

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $(".map__country");
		this.hideInitially();
	}


	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}
}

export default RevealOnScroll;