let game_board = document.body.getElementsByClassName('game-board')[0];
let squares = game_board.getElementsByTagName('div');

let player = 1;

function change_player() {
    if (player === 1) {
        player ++;

    } else {
        player --;
    }
};


// Checks if square is available, if so, it places an X or O
for (let i = 0; i < 9; i++) {
    squares[i].addEventListener('click', () => {
        if (squares[i].innerHTML === 'O' || squares[i].innerHTML === 'X') {
            alert('Invalid move')
        } else {
            squares[i].innerHTML = 'X'
        }
    })
}
