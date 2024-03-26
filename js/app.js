import PersonnageAll from './PersonnageAll.js'
import Utils from './services/Utils.js';
import Error404 from './Error404.js';
import PersonnageDetails from './PersonnageDetails.js';
import Decks from './Decks.js';
import Home from './Home.js';
import DecksDetail from './DecksDetail.js'

const routes = {
    '/': new Home(),
    // '/about': About,
    '/personnages':  new PersonnageAll(),
    '/personnage/:id':  new PersonnageDetails(),
    '/decks':  new Decks(),
    '/decks/:id': new DecksDetail(),
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const content = null || document.querySelector('#content');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : new Error404(); // Instanciate Error404 component if route not found
    
    content.innerHTML = await page.render();
}
console.log('test')
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
