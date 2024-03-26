import Provider from "./services/Provider.js";
console.log('home')
export default class Home {
    async render() {
        let view = `
        <main>
        <section class="hero-section">
            <div class="container">
                <div class="contenu-middle">
                    <img src="Images/image_clash_royale.png" alt="">
                </div>
                
        </section>

        <section class="features-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <img src="Images/telephone_clash_royale.png" alt="">
                    <span><h1>DES BATAILLES EN TEMPS RÉEL</h1></span>
                    <p>Clash Royale est un jeu multijoueur en temps réel mettant en scène les Royales, vos personnages Clash préférés et bien plus encore. Collectionnez et améliorez des dizaines de cartes représentant les troupes, les sorts et les défenses de Clash of Clans que vous connaissez et aimez, ainsi que les Royales : Princes, Chevaliers, Bébés Dragons et bien plus encore. Faites tomber les rois et princesses ennemis de leurs tours pour vaincre vos adversaires et remporter des trophées, des couronnes et la gloire dans l'arène.</p>
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
        <footer class="mt-5 fixed-bottom bg-light">
        <div class="container text-center">
            <p>&copy; 2024 SuperCell</p>
        </div>

    </main>

        `;
        return view;
    }
}
