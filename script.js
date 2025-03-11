let board = ['', '', '', '', '', '', '', '' ,'' ]

const winCon = [[0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]]

function placeX(place) {
    if (board[place] != '') {return}
    document.getElementById(place)
    .innerHTML +=
    'X'
    board[place] = 'X'
    placeO()
    checkWin()
}

function checkWin() {
    for ( i=0; i < winCon.length; i++ ) {
        console.log(board)
        if (board[winCon[i][0]] == '' && board[winCon[i][1]] == '' && board[winCon[i][2]] == '') {return}
         if (board[winCon[i][0]] == 'X' && board[winCon[i][1]] == 'X' && board[winCon[i][2]] == 'X' ) {
            xWin()
        } else if (board[winCon[i][0]] == 'O' && board[winCon[i][1]] == 'O' && board[winCon[i][2]] == 'O' ) {
            oWin()
} else {continue}
}
}


function xWin() {
    document.getElementById('title').innerHTML = '!!YOU WIN!!'
    document.getElementById('title').style.color = 'green'
}

function oWin() {
    document.getElementById('title').innerHTML = '!!YOU LOSE!!'
    document.getElementById('title').style.color = 'red'
}


function placeO() {
    let choice = Math.floor(Math.random() * 9)
    while (board[choice] !== '') {
        choice = Math.floor(Math.random() * 9)
    }
    document.getElementById(choice).innerHTML += 'O'
    board[choice] = 'O'
    checkWin()
}

const space0 = document.getElementById('0')
const space1 = document.getElementById('1')
const space2 = document.getElementById('2')
const space3 = document.getElementById('3')
const space4 = document.getElementById('4')
const space5 = document.getElementById('5')
const space6 = document.getElementById('6')
const space7 = document.getElementById('7')
const space8 = document.getElementById('8')

space0.addEventListener('click', function(){placeX(0)})

space1.addEventListener('click', function(){placeX(1)})

space2.addEventListener('click', function(){placeX(2)})

space3.addEventListener('click', function(){placeX(3)})

space4.addEventListener('click', function(){placeX(4)})

space5.addEventListener('click', function(){placeX(5)})

space6.addEventListener('click', function(){placeX(6)})

space7.addEventListener('click', function(){placeX(7)})

space8.addEventListener('click', function(){placeX(8)})