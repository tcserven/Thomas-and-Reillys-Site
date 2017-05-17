import $ from "jquery";
import waypoints from "../../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}


	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		// This is pointing back to the original object
		var that = this;
		this.itemsToReveal.each(function() {
			// Here, this is pointing to the current DOM element
			var currentItem = this; 
			// creating a new instance of the waypoint class, which is from the lib. Its making a new object. This is technically a constructor function. This runs 4 times. 
			new Waypoint({
				// But now this is pointing to the new object
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;


// old code
// import $ from "jquery";
// import waypoints from "../../../../../node_modules/waypoints/lib/noframework.waypoints";

// class RevealOnScroll {
// 	constructor() {
// 		this.itemsToReveal = els;
// 		this.hideInitially();
// 		this.createWaypoints();
// 	}


// 	hideInitially() {
// 		this.itemsToReveal.addClass("reveal-item");
// 	}

// 	createWaypoints() {
// 		this.itemsToReveal.each(function() {
// 			// Here, this is pointing to the current DOM element
// 			var that = this; 
// 			// creating a new instance of the waypoint class, which is from the lib. Its making a new object. This is technically a constructor function. This runs 4 times. 
// 			new Waypoint({
// 				// But now this is pointing to the new object
// 				element: that,
// 				handler: function() {
// 					$(that).addClass("reveal-item--is-visible");
// 				},
// 				offset: "85%"
// 			});
// 		});
// 	}
// }

// export default RevealOnScroll;