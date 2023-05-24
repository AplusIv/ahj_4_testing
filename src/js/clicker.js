export default class Clicker {
  constructor(gamefield) {
    this.gamefield = gamefield;
    this.element = this.gamefield.element;

    this.onBoardClick = this.onBoardClick.bind(this);
    this.element.addEventListener('click', this.onBoardClick);
  }

  onBoardClick(e) {
    const hole = e.target.closest('li');
    // console.log(hole);

    if (hole.querySelector('img')) {
      let currentScores = +this.gamefield.scoresCounter.textContent;
      currentScores += 1;
      this.gamefield.scoresCounter.textContent = currentScores;

      clearInterval(this.gamefield.interval);
      clearTimeout(this.gamefield.timeout);
      this.gamefield.removeImg(hole);

      this.gamefield.renderImg();
      // console.log(this.gamefield._interval);
    }
  }
}
