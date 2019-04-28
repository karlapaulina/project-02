import { SVG_NS } from '../settings';

export default class Score {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    
    }

   /* if (this.player1.score === 1
        && this.player2.score < 1) {
        confirm('Player 1 has won')
        console.log(confirm);
      } else if (
        this.player2.score === 1) {
        confirm('Player 2 has won'),
          console.log(confirm);
      } */


    render(svg, score) {

        let text = document.createElementNS(SVG_NS, 'text') 
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', 'pink');
        text.textContent = score;
        svg.appendChild(text);
    }
  }

  /*
-max score
-player x won alert
-Create balls with special effects (different speeds, sizes, effects, etc.)
-20 lines of code
  */