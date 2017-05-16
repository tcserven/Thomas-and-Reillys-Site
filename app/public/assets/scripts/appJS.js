// import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

// this is so we can run the constructor function as soon as the site loads
// We create a new object that uses the MobileMenu class as a blueprint, or creating a new instance of that class.
var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();