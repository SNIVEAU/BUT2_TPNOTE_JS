import Utils from './services/Utils.js';
import Provider from "./services/Provider.js";

export default class PersonnageDetails {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await Provider.getPersonnage(request.id)
        console.log(post);
        return /*html*/`
            <section class="section">
                <div class="container">
                    <h1>C'est le/la ${post.nom}</h1>
                    <p>Il coûte ${post.elixir} élixirs</p>
                    <p>Il est accessible à partir de l'arène ${post.arena}</p>
                    <p>Il est de rareté : ${post.rarity}</p>
                    <img src="${post.image}" alt="${post.nom}">
                    <p>Il est joué dans ${post.listdeck.length} Decks</p>
                </div>
                <p><a href="/">Retour à l'accueil</a></p>
                <p><a href="#/Personnages">Retour à tous les personnages</a></p>
            </section>
            
        `
    }
}
