import Provider from "./services/Provider.js";
console.log('home')
export default class Home {
    async render() {
        let view = `
        <main>
        <section class="hero-section">
            <div class="container">
                <h1 class="text-center">Bienvenue sur le site des crampons</h1>
                <p class="text-center">Découvrez le monde palpitant de Clash Royale</p>
                <div class="contenu-middle">
                    <img src="Images/clash_royale.png" alt="">
                </div>
                
        </section>

        <section class="features-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2>Personnages</h2>
                        <p>Découvrez une variété de personnages uniques à jouer dans Clash Royale.</p>
                    </div>
                    <div class="col-md-4">
                        <h2>Equipements</h2>
                        <p>Explorez une large gamme d'équipements et de stratégies pour dominer vos adversaires.</p>
                    </div>
                    <div class="col-md-4">
                        <h2>A Propos</h2>
                        <p>Apprenez-en plus sur l'univers et le développement de Clash Royale.</p>
                    </div>
                </div>
            </div>
        </section>

        
        <div class="container">
            <div class="tabs">
                <input type="radio" name="slider" id="web" >
                <input type="radio" name="slider" id="graphics" >
                <input type="radio" name="slider" id="photography" checked>
                <div class="navigation-buttons">
                    <label for="web"></label>
                    <label for="graphics"></label>
                    <label for="photography"></label>
                </div>
                <div class="content">
                    <div class="screen">
                        <div class="limited">
                            <div class="textBlock">
                                <div class="titre">Clash Royale</div>
                                <div class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus vero sequi nisi! Aspernatur facere praesentium, consequuntur est repellat exercitationem, dolorum porro voluptatibus adipisci excepturi eaque consequatur nulla molestias ea?</div>
                                <div class="cta">Découvrir</div>
                            </div>
                            <img src="https://raw.githubusercontent.com/yannickgh/assets/main/skelly.png" alt="">
                        </div>
                    </div>
                    <div class="screen">
                        <div class="limited">
                            <div class="textBlock">
                                <div class="titre">Clash Royale</div>
                                <div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero aliquam excepturi quisquam eaque accusantium quibusdam modi nobis doloremque voluptatibus voluptas dolorem sunt, quae perferendis inventore aspernatur sequi reiciendis tempora!</div>
                                <div class="cta">Découvrir</div>
                            </div>
                            <img src="https://raw.githubusercontent.com/yannickgh/assets/main/roi.png" alt="">
                        </div>
                    </div>
                    <div class="screen">
                        <div class="limited">
                            <div class="textBlock">
                                <div class="titre">Clash Royale</div>
                                <div class="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti magni, dignissimos saepe repellendus officiis sed ipsam veritatis illo maiores, error dolore? Reprehenderit, nemo placeat culpa quia alias ut aliquid. At.</div>
                                <div class="cta">Découvrir</div>
                            </div>
                            <img src="https://raw.githubusercontent.com/yannickgh/assets/main/gk.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </main>

        `;
        return view;
    }
    async after_render(){
        
    }
}
