import { link_class } from './link_class';
import { zelda_class } from './zelda_class'

const zelda = new zelda_class();
const link = new link_class();

zelda.addUpvieButtonListener();
zelda.addUppieceButtonListener();
zelda.addUpétoileButtonListener();
link.addUppieceButtonListener();
link.addUpvieButtonListener();
link.addUppotionButtonListener();

/* Detecter selection Link ou Zelda*/

const linkButton = document.querySelector('.personnage_selection_link');
const zeldaButton = document.querySelector('.personnage_selection_zelda');

linkButton?.addEventListener('click', () => {
    linkButton.classList.add('selected');
    zeldaButton?.classList.remove('selected');
});

zeldaButton?.addEventListener('click', () => {
    zeldaButton.classList.add('selected');
    linkButton?.classList.remove('selected');
});

const buttonStart = document.getElementById("lancer") as HTMLButtonElement;
const jeuxStart = document.getElementById("jeux_start");
const divlose = document.getElementById("divlose") as HTMLDivElement;

buttonStart.addEventListener("click", () => {
    if (linkButton?.classList.contains('selected')) {
        const jeuxLink = document.getElementById("jeux_link");
        jeuxLink?.classList.add("display");
    } else if (zeldaButton?.classList.contains('selected')) {
        const jeuxZelda = document.getElementById("jeux_zelda");
        jeuxZelda?.classList.add("display");
    }
    jeuxStart?.classList.add("display_none");
    jeuxStart?.classList.remove("display")
    setInterval(() => { zelda.update(); link.update();}, 1000);
    divlose.textContent = "Oh non !" + " " + inputPseudo.value + " est mort" ;
});



/* Obligation de rentrer pseudo + récup pseudo*/

const form = document.getElementById("recup_pseudo") as HTMLFormElement;
const inputPseudo = form.elements.namedItem("pseudo") as HTMLInputElement;
const buttonValider = document.getElementById("button") as HTMLButtonElement;

buttonValider.addEventListener("click", (event) => {
    const pseudo = inputPseudo.value;
    const buttonStart = document.getElementById("lancer") as HTMLButtonElement;
    const button = document.getElementById("button") as HTMLButtonElement;
    if (pseudo !== "" && (linkButton?.classList.contains('selected') || zeldaButton?.classList.contains('selected'))) {
        buttonStart.classList.add("display");
        button.style.display = "none";
    }
});

setInterval(function() {
    if ((zelda.vie < 0) && (zelda.piece < 0) && (zelda.étoile < 0) && (link.vie < 0) &&(link.piece < 0) && (link.potion < 0)) {
        const jeuxZelda = document.getElementById("jeux_zelda");
        const jeuxLink = document.getElementById("jeux_link");
        const jeux_fin = document.getElementById("jeux_fin");
        
        jeuxZelda?.classList.remove("display");
        jeuxLink?.classList.remove("display");
        jeux_fin?.classList.add("display");
    }
}, 1000);

/* Reload quand cliquer sur button recommencer */

const retour_accueil: HTMLElement | null = document.getElementById("recommencer");
retour_accueil?.addEventListener("click", () => {
    location.reload();
})