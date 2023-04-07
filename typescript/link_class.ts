import { jeux_class } from "./jeux_class";

export class link_class extends jeux_class {
  barre_vie = "barre_vie_link"
  vie = 100
  piece = 100;
  up_vie = "upvie_link"
  up_piece = "uppiece_link"
  barre_piece = "barre_piece_link"
  potion = 100
  barre_potion = "barre_potion_link"
  up_potion = "uppotion_link"

  public barre_diminue_potion() {
    if (this.potion > 50) {
      this.potion -= 10;
    } else if (this.potion > 15) {
      this.potion -= 6;
    } else {
      this.potion -= 2;
    }


    const potionBarre = document.getElementById(this.barre_potion);
    if (potionBarre) {
      potionBarre.style.width = `${this.potion}%`;
    }
  }

  // Méthode pour alimenter les jauges
  public uppotion() {
    console.log(this.potion);

    if (this.potion < 100) {
      this.potion += 10;
      if (this.potion > 100) {
        this.potion = 100;
      }




      // Mettre à jour la propriété "width" de l'élément "barre_vie_zelda" en fonction de la vie restante
      const barrepotion = document.getElementById(this.barre_potion);
      if (barrepotion) {
        barrepotion.style.width = `${this.potion}%`;
      }
    }
  }

  public addUppotionButtonListener() {

    const uppotionBtn = document.getElementById(this.up_potion);
    if (uppotionBtn) {
      uppotionBtn.addEventListener("click", () => {
        this.uppotion();
      });
    }
  }
  public update() {

    this.barre_diminue_vie();
    this.barre_diminue_piece();
    this.barre_diminue_potion();
  }
}