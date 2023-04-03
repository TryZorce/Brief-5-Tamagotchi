
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

/* Obligation de rentrer pseudo + récup pseudo*/

const form = document.getElementById("recup_pseudo") as HTMLFormElement;
const inputPseudo = form.elements.namedItem("pseudo") as HTMLInputElement;
const buttonValider = form.querySelector("button") as HTMLButtonElement;

function displaylancer() {
    const pseudo = inputPseudo.value;
    const buttonStart = document.getElementById("lancer") as HTMLButtonElement;
    const button = document.getElementById("button") as HTMLButtonElement;
    if (pseudo !== "" && (linkButton?.classList.contains('selected') || zeldaButton?.classList.contains('selected'))) {
        buttonStart.classList.add("display");
        button.style.display = "none";
    }
}

/* Reload quand cliquer sur button recommencer */

const retour_accueil: HTMLElement | null = document.getElementById("recommencer");
retour_accueil?.addEventListener("click", () => {
    location.reload();
})