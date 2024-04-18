import Provider from "./services/Provider.js";
export default class Decks {
    async render() {
        let view = ``
        console.log(localStorage)
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);            
            console.log(key)
            let post = await Provider.getPersonnage(key);
            console.log(post);
            view += `
                    <img loading="lazy" src="${post.image}" alt="${post.nom}">
                    <p> ${post.nom}</p>
            `;
        };
        return view;
    }
    async after_render(){
        
    }
}