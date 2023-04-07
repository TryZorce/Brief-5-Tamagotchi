import { jeux_class } from "./jeux_class";

export class zelda_class extends jeux_class {
  barre_vie = "barre_vie_zelda"
  vie = 100
  piece = 100;
  up_vie = "upvie_zelda"
  up_piece = "uppiece_zelda"
  barre_piece = "barre_piece_zelda"
  étoile = 100
  barre_étoile = "barre_étoile_zelda"
  up_étoile = "upétoile_zelda"

  public barre_diminue_étoile() {
    if (this.étoile > 50) {
      this.étoile -= 10;
    } else if (this.étoile > 15) {
      this.étoile -= 6;
    } else {
      this.étoile -= 2;
    }


    const étoileBarre = document.getElementById(this.barre_étoile);
    if (étoileBarre) {
      étoileBarre.style.width = `${this.étoile}%`;
    }
  }

  // Méthode pour alimenter les jauges
  public upétoile() {
    console.log(this.étoile);

    if (this.étoile < 100) {
      this.étoile += 10;
      if (this.étoile > 100) {
        this.étoile = 100;
      }




      // Mettre à jour la propriété "width" de l'élément "barre_vie_zelda" en fonction de la vie restante
      const barreétoile = document.getElementById(this.barre_étoile);
      if (barreétoile) {
        barreétoile.style.width = `${this.étoile}%`;
      }
    }
  }

  public addUpétoileButtonListener() {

    const upétoileBtn = document.getElementById(this.up_étoile);
    if (upétoileBtn) {
      upétoileBtn.addEventListener("click", () => {
        this.upétoile();
      });
    }
  }
  public update() {

    this.barre_diminue_vie();
    this.barre_diminue_piece();
    this.barre_diminue_étoile();
  }
}