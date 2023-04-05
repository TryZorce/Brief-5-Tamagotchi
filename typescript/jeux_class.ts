export class jeux_class {
  public vie: number;
  private barreId: string;
  private upvieBtnId: string;

  constructor(vie: number, barreId: string, upvieBtnId: string) {
    this.vie = vie;
    this.barreId = barreId;
    this.upvieBtnId = upvieBtnId;
  }

  // Méthode pour diminuer la jauge de vie
  public barreDiminue() {
    if (this.vie > 50) {
      this.vie -= 10;
    } else if (this.vie > 15) {
      this.vie -= 6;
    } else {
      this.vie -= 2;
    }

    // Mettre à jour la propriété "width" de l'élément de barre en fonction de la vie restante
    const barreEl = document.getElementById(this.barreId);
    if (barreEl) {
      barreEl.style.width = `${this.vie}%`;
    }
  }

  // Méthode pour augmenter la jauge de vie
  public upvie() {
    if (this.vie < 100) {
      this.vie += 10;
      if (this.vie > 100) {
        this.vie = 100;
      }

      // Mettre à jour la propriété "width" de l'élément de barre en fonction de la vie restante
      const barreEl = document.getElementById(this.barreId);
      if (barreEl) {
        barreEl.style.width = `${this.vie}%`;
      }
    }
  }

  // Ajouter un écouteur d'événements pour le bouton d'augmentation de vie
  public addUpvieButtonListener() {
    const upvieBtn = document.getElementById(this.upvieBtnId);
    if (upvieBtn) {
      upvieBtn.addEventListener("click", () => {
        this.upvie();
      });
    }
  }

  // Méthode pour mettre à jour les jauges à chaque tour de jeu
  public update() {
    this.barreDiminue();
  }
}