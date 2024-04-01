import Provider from "./services/Provider.js";

console.log('test')
export default class PersonnageAll {
    async render() {
        let personnages = await Provider.fetchPersonnages(99999);
        console.log(personnages);
        let view = `
            <section class="section">
                <h1>Personnages</h1>
                <ul class="personnage-list">
                    ${personnages.map(personnage => `
                        <li><a href="#/personnage/${personnage.id}" class="personnage-link">${personnage.nom}</a></li>
                    `).join('')}
                </ul>
            </section>
        `;
        return view;
    }
}
