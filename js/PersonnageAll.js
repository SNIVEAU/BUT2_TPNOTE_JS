import Provider from "./services/Provider.js";
console.log('test')
export default class PersonnageAll {
//     async render() {
//         let personnages = await Provider.fetchPersonnages(10);
//         console.log(personnages);
//             let view = `
//             <section class="section">
//                 <h1>Personnages</h1>
//                 <ul>
//                     ${personnages.map(personnage => `
//                         <li><a href="#/personnage/${personnage.id}">${personnage.nom}</a></li>
//                     `).join('')}
//                 </ul>
//             </section>
            
//         `;
//         return view;
//     }
// }
    async render() {
        let personnages = await Provider.fetchPersonnages(10);
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
}
