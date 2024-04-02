import Provider from "./services/Provider.js";
import Utils from "./services/Utils.js";
console.log('home')
export default class Home {


    async render() {

        let view = `
        <main>
        <script type='module' src='./js/services/Provider.js'></script>
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
                                <div class="titre">Le Chevalier !</div>
                                <div class="message">Un spécialiste du combat rapproché, cousin charmant et cultivé du barbare. On raconte que la magnificence de sa moustache a suffit à elle seule à justifier son adoubement.</div>
                                <div class="cta-1">En savoir plus</div>
                            </div>
                            <img src="../Images/knight.png" alt="">
                        </div>
                    </div>
                    <div class="screen">
                        <div class="limited">
                            <div class="textBlock">
                                <div class="titre">Les Archers !</div>
                                <div class="message">Un duo d'attaquantes à distance légèrement protégées. Elles vous aideront à éliminer les unités terrestres et aériennes, mais ne comptez pas sur elles pour vos conseils coiffure.</div>
                                <div class="cta-2" onclick="Provider.redirectToDetails(2)">En savoir plus</div>

                            </div>
                            <img src="../Images/archers.png" alt="">
                        </div>
                    </div>
                    <div class="screen">
                        <div class="limited">
                            <div class="textBlock">
                                <div class="titre">Les Gobelins !</div>
                                <div class="message">Quatre attaquants de mêlée rapides et sans armure. Petits, rapides, verts et méchants !</div>
                                <div class="cta-3" onclick="Provider.redirectToDetails(3)">En savoir plus</div>

                            </div>
                            <img src="../Images/goblins.png" alt="">
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

    async after_render() {
        document.getElementsByClassName('cta-1')[0].addEventListener('click', () => Provider.redirectToDetails(1));
        document.getElementsByClassName('cta-2')[0].addEventListener('click', () => Provider.redirectToDetails(2));
        document.getElementsByClassName('cta-3')[0].addEventListener('click', () => Provider.redirectToDetails(3));
    }

}
