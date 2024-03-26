import Utils from './services/Utils.js';
import Provider from "./services/Provider.js";

export default class DecksDetail {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await Provider.getDeck(request.id)
        let nomdeck = post.nom
        let texte=`
        <section class="section">
            <h1> C'est le `+nomdeck+`</h1>`;
            let listeCarte = post.listeCarte;
            console.log(listeCarte)
            // for (var idcard of post.listeCarte){
            for (var i = 0; i < listeCarte.length; i++) {
                if (i==4){
                    texte+=`<br></br>`
                }
                let idcard = listeCarte[i]
                post = await Provider.getPersonnage(idcard);
                texte+=`<img src="${post.image}" alt="${post.nom}">`
        };
        console.log(texte)
        return /*html*/texte+`
            </section>
            <p><a href="/">Retourner à l'accueil</a></p>
            <p><a href="#/Decks">Retourner aux decks</a></p>
        `
    }
}

