import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import ScrollToLink from './modules/ScrollToLink';

// this is so we can run the constructor function as soon as the site loads
// We create a new object that uses the MobileMenu class as a blueprint, or creating a new instance of that class.
var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var scrollToLink = new ScrollToLink();

// Making our code reusable for revealonscroll
new RevealOnScroll($(".map__country"), "85%");
new RevealOnScroll($(".map__image-of-sa"), "90%");
new RevealOnScroll($(".welcome__top-blog-post"), "85%");
new RevealOnScroll($(".welcome__picture"), "85%");
// var revealOnScroll = new RevealOnScroll();