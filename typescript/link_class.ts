import { jeux_class } from "./jeux_class";

export class link_class extends jeux_class {
        public addUpvieButtonListener() {
          const upvieBtn = document.getElementById("upvie_link");
          if (upvieBtn) {
            upvieBtn.addEventListener("click", () => {
              this.upvie();
              console.log();
            });
          }
        }
      }
      
