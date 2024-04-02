import Provider from "./services/Provider.js";
export default class Decks {
    async render() {
        let view = ``
        for (let id in localStorage){
            let post = await Provider.getPersonnage(id);
            console.log(post);
        }
        let view = `
            <section class="section">
                <h1>Decks</h1>
                <ul>
                </ul>
            </section>
        `;
        return view;
    }
    async after_render(){
        
    }
}