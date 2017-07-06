import $ from "jquery";

class ScrollToLink {
	constructor() {
		this.toplinks = $("#toplinks");
		this.events();
	}

	events() {
		this.toplinks.on("click", "a", function(event) {
			event.preventDefault();
			//clever way to select the offset of the paragraph linking to the specific button  
			var o =  $($(this).attr("href")).offset();   
			console.log(o);
			var sT = o.top - $("#site-nav").outerHeight(true);
			window.scrollTo(0,sT); 
		});
	}

}

export default ScrollToLink;