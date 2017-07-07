import $ from "jquery";

class ScrollToLink {
	constructor() {
		this.toplinks = $("#toplinks");
		this.navTop = $("#site-nav");
		this.events();
	}

	events() {
		var that = this;
		this.toplinks.on("click", "a", function(event) {
			event.preventDefault();
			//clever way to select the offset of the paragraph linking to the specific button

			var offsetHeight =  $($(this).attr("href")).offset();   
			// console.log(offsetHeight);
			var scroll = offsetHeight.top - that.navTop.outerHeight(true);
			// console.log(scrollTo);
			window.scrollTo(0,scroll);
		});
	}
}

export default ScrollToLink;