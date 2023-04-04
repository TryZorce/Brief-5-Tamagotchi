import { jeux_class } from './jeux_class';
import { link_class } from './link_class';
import {zelda_class} from './zelda_class'

const jeux_link = new link_class()
const jeuxclass = new jeux_class();

setInterval(() => {
    jeuxclass.update();
}, 1000);

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





/* Reload quand cliquer sur button recommencer */

const retour_accueil: HTMLElement | null = document.getElementById("recommencer");
retour_accueil?.addEventListener("click", () => {
    location.reload();
})


jeuxclass.addUpvieButtonListener();

