export class jeux_class {
  public vie: number
  public piece: number
  public barre_vie: string
  public up_vie: string
  public up_piece: string
  public barre_piece: string

  public barre_diminue_vie() {
    if (this.vie > 50) {
      this.vie -= 10;
    } else if (this.vie > 15) {
      this.vie -= 6;
    } else {
      this.vie -= 2;
    }


    const vieBarre = document.getElementById(this.barre_vie);
    if (vieBarre) {
      vieBarre.style.width = `${this.vie}%`;
    }
  }

  // Méthode pour alimenter les jauges
  public upvie() {
    console.log(this.vie);

    if (this.vie < 100) {
      this.vie += 10;
      if (this.vie > 100) {
        this.vie = 100;
      }




      // Mettre à jour la propriété "width" de l'élément "barre_vie_zelda" en fonction de la vie restante
      const barreVie = document.getElementById(this.barre_vie);
      if (barreVie) {
        barreVie.style.width = `${this.vie}%`;
      }
    }
  }

  public addUpvieButtonListener() {

    const upvieBtn = document.getElementById(this.up_vie);
    if (upvieBtn) {
      upvieBtn.addEventListener("click", () => {
        this.upvie();

      });
    }
  }

  // Même code pour pièce
  public barre_diminue_piece() {
    if (this.piece > 50) {
      this.piece -= 10;
    } else if (this.piece > 15) {
      this.piece -= 6;
    } else {
      this.piece -= 2;
    }


    const pieceBarre = document.getElementById(this.barre_piece);
    if (pieceBarre) {
      pieceBarre.style.width = `${this.piece}%`;
    }
  }

  // Méthode pour alimenter les jauges
  public uppiece() {
    console.log(this.piece);

    if (this.piece < 100) {
      this.piece += 10;
      if (this.piece > 100) {
        this.piece = 100;
      }




      // Mettre à jour la propriété "width" de l'élément "barre_vie_zelda" en fonction de la vie restante
      const barrepiece = document.getElementById(this.barre_piece);
      if (barrepiece) {
        barrepiece.style.width = `${this.piece}%`;
      }
    }
  }

  public addUppieceButtonListener() {

    const uppieceBtn = document.getElementById(this.up_piece);
    if (uppieceBtn) {
      uppieceBtn.addEventListener("click", () => {
        this.uppiece();

      });
    }
  }

  // Méthode pour mettre à jour les jauges à chaque tour de jeu
  public update() {
    this.barre_diminue_vie();
    this.barre_diminue_piece();
  }
}