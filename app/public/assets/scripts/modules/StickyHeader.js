import $ from 'jquery';
import waypoints from "../../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-nav");
		this.headerTriggerElement = $('.large-background__title');
		this.navLogo = $('.site-nav__logo-mobile');
		this.createHeaderWaypoint();
		this.hideInitially();
		this.createHeaderWaypoint2();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	createHeaderWaypoint() {
		// here, this is pointing towards our main class of StickyHeader
		var that = this;
		new Waypoint({
			// Element property. Waypoints is expecting a JS native DOM element. Currently were passing a JQ object. We can access the JS native DOM element inside a JQ object easily with [0]. Its because the first item in a JQ array like object is a pointer to the native DOM element. 
			element: this.headerTriggerElement[0], 
			handler: function(direction) {
				if (direction === "down") {
					that.siteHeader.addClass("site-nav--dark");
				} else {
					that.siteHeader.removeClass("site-nav--dark");
				}
			}
		});
	}

	hideInitially() {
		this.navLogo.addClass("reveal-item--no-scale");
	}

	createHeaderWaypoint2() {
		// here, this is pointing towards our main class of StickyHeader
		var that = this;
		new Waypoint({
			// Element property. Waypoints is expecting a JS native DOM element. Currently were passing a JQ object. We can access the JS native DOM element inside a JQ object easily with [0]. Its because the first item in a JQ array like object is a pointer to the native DOM element. 
			element: this.headerTriggerElement[0], 
			handler: function(direction) {
				if (direction === "down") {
					that.navLogo.addClass("reveal-item--no-scale--is-visible--roll-in");
				} else {
					that.navLogo.removeClass("reveal-item--no-scale--is-visible--roll-in");
				}				
			}
		});
	}

}

export default StickyHeader;