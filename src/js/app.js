import Clicker from './clicker';
import GameField from './gameField';
import movingHandler from './movement';
// import img from '../img/hammer.png'

const goblinImg = document.createElement('img');
goblinImg.src = 'https://raw.githubusercontent.com/AplusIv/ahj-homeworks/simplification/dom/pic/goblin.png';
goblinImg.alt = 'Goblin pic';

const gameField = new GameField('container', 15, goblinImg, movingHandler);
gameField.renderField();
gameField.renderImg();

const clicker = new Clicker(gameField);
console.log(clicker);

// document.body.appendChild(img);
