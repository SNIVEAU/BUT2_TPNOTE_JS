import Provider from "./services/Provider.js";

export default class PersonnageAll {
    async render() {
        let personnages = await Provider.fetchPersonnages(99999);
        console.log(personnages);
        let view = `
            <section class="section">
                <h1>Personnages</h1>
                <ul class="personnage-list">
                    ${personnages.map(personnage => `
                        <li>
                            <div>${personnage.nom}</div>
                            <div>
                                <a href="#/personnage/${personnage.id}" class="personnage-link">Voir la carte</a>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </section>
        `;
        return view;
    }
}
