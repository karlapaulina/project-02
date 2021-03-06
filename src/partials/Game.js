import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Ball2 from './Ball';
import Score from './Score';
import { SVG_NS, KEYS } from '../settings';


export default class Game {
  constructor(element, width, height, ) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element)

    //Create instance of board
    this.board = new Board(this.width, this.height);

    //Dimensions for Player paddles instances
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;


    //Player 1 instance
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.a,
      KEYS.z
    )

    //Player 2 instance
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      ((this.width - this.boardGap) - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down,
    )

    //Ball instance
    this.ball = new Ball(
      8,
      this.width,
      this.height
    )

    //Ball instance
    this.ball2 = new Ball2(
      5,
      this.width,
      this.height
    )

    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          this.player1.speed = 10
          this.player2.speed = 10
          break;
      }
    }); 5
  }


  render() {

    if (this.pause) {
      this.player1.speed = 0
      this.player2.speed = 0
      return;
    }
    this.gameElement.innerHTML = '';


    let svg = document.createElementNS(SVG_NS, 'svg');

    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg)

    //Renders board by passing svg canvas we created
    this.board.render(svg)

    //Render P1 and P2 paddles
    this.player1.render(svg);
    this.player2.render(svg);

    //Render ball
    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);

    //Ball2 instance
    if (this.player1.score >= 5
      ||
      this.player2.score >= 5) {
      this.ball2.render(svg, this.player1, this.player2);
    }
  }
}
