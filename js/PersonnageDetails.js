import Utils from './services/Utils.js';
import Provider from "./services/Provider.js";

export default class PersonnageDetails {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await Provider.getPersonnage(request.id)
        console.log(post);
        return /*html*/`
            <section class="section">
                <h1> C'est le/la ${post.nom}</h1>
                <p> Il coute ${post.elixir} </p>
                <p> Il est accessible à partie de l'arène ${post.arena} </p>
                <p> Il est ${post.rarity}</p>
                <img src="${post.image}" alt="${post.nom}">
                <p> Il est joué dans ${post.listdeck.length} Decks

            </section>
            <p><a href="/">back to home</a></p>
            <p><a href="#/Personnages">back to all Personnages</a></p>
        `
    }
}