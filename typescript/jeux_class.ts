export class jeux_class {
  public vie: number = 100;

  public barreDiminue() {
    if (this.vie > 50) {
      this.vie -= 10;
    } else if (this.vie > 15) {
      this.vie -= 6;
    } else {
      this.vie -= 2;
    }

    
    const VieEl = document.getElementById('barre-vie');
    if (VieEl) {
      VieEl.style.width = `${this.vie}%`;
    }
  }

  

  // Méthode pour alimenter les jauges
  public upvie() {
    console.log("aaaaaaaaaaaaaaaaaaaa");
    console.log(this.vie);
    
    if (this.vie < 100) {
      this.vie += 10;
      if (this.vie > 100) {
        this.vie = 100;
      }


      

      // Mettre à jour la propriété "width" de l'élément "barre-vie" en fonction de la vie restante
      const barreVie = document.getElementById('barre-vie');
      if (barreVie) {
        barreVie.style.width = `${this.vie}%`;
      }
    }
  }
  
  public addUpvieButtonListener() {
    console.log("bbbbbbbbbbbb");
    
    const upvieBtn = document.getElementById("upvie_zelda");
    if (upvieBtn) {
      upvieBtn.addEventListener("click", () => {
        this.upvie();
        console.log();
        
      });
    }
  }

  // Méthode pour mettre à jour les jauges à chaque tour de jeu
  public update() {
    this.barreDiminue();
    
  }

  
}



