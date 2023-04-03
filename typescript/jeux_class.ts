export class jeux_class {
  private barreVie: number = 100;
  private vie: number = 100;

  private barreDiminue() {
    if (this.barreVie > 50) {
      this.vie -= 10;
    } else if (this.barreVie > 15) {
      this.vie -= 6;
    } else {
      this.vie -= 2;
    }
    // Mettre à jour la propriété "width" de l'élément "barre-vie" en fonction de la vie restante
    const barreVieEl = document.getElementById('barre-vie');
    if (barreVieEl) {
      barreVieEl.style.width = `${this.vie}%`;
    }
  }

  // Méthode pour alimenter les jauges
  public upvie() {
    if (this.vie < 100) {
      this.vie += 10;
      if (this.vie > 100) {
        this.vie = 100;
      }
      // Mettre à jour la propriété "width" de l'élément "barre-vie" en fonction de la vie restante
      const barreVieEl = document.getElementById('barre-vie');
      if (barreVieEl) {
        barreVieEl.style.width = `${this.vie}%`;
      }
    }
  }

  // Méthode pour mettre à jour les jauges à chaque tour de jeu
  public update() {
    this.barreDiminue();
  }
}
