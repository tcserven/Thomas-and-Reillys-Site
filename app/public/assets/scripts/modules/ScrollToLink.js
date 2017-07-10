import $ from "jquery";

class ScrollToLink {
	constructor() {
		this.toplinks = $("#toplinks");
		this.navTop = $("#site-nav");
		this.scrollTopButton = $('#scrollTopButton');
		this.eventScroll();
		this.scrollTop();
	}

	eventScroll() {
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

	scrollTop() {
		this.scrollTopButton.on('click', function() {
			window.scrollTo(0,0);
		});

		$(document).scroll(function() {
			var y = $(this).scrollTop();
			// console.log(y);
			if (y >= 100) {
				$(".button__fixedButton").addClass("button__fixedTopButton--visible");
			} else {
				$(".button__fixedButton").removeClass("button__fixedTopButton--visible");
			}
		});
	}
}

export default ScrollToLink;