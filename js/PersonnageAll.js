import Provider from "./services/Provider.js";
export default class PersonnageAll {
    async render() {
        let personnages = await Provider.fetchPersonnages(99999);
        let view = `
            <section class="section">
                <h1>Personnages</h1>
                <ul>
                    ${personnages.map(personnage => `
                        <li><a href="#/personnage/${personnage.id}">${personnage.nom}</a></li>
                    `).join('')}
                </ul>
            </section>
        `;
        return view;
    }
    async after_render(){
        
    }
}
