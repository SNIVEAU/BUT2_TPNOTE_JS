import Provider from "./services/Provider.js";
export default class Decks {
    async render() {
        let decks = await Provider.fetchDecks(99999);
        let view = `
            <section class="section">
                <h1>Decks</h1>
                <ul>
                    ${decks.map(deck => `
                        <li><a href="#/deck/${deck.id}">${deck.nom}</a></li>
                    `).join('')}
                </ul>
            </section>
        `;
        return view;
    }
}