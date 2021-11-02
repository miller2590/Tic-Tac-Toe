let game_board = document.body.getElementsByClassName('game-board')[0];
let squares = game_board.getElementsByTagName('div');

let player = 1;
let position = 0;

function change_player() {
    if (player === 1) {
        player ++;

    } else {
        player --;
    }
};

console.log(player)
change_player()
console.log(player)
change_player()
console.log(player)

