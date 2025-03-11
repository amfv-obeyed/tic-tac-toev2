let board = ['', '', '', '', '', '', '', '' ,'' ]

function placeX(place) {
    if (board[place] != '') {return}
    document.getElementById(place)
    .innerHTML +=
    'X'
    board[place] = 'X'
}


// function placeO() {
//     let choice = Math.floor(Math.random() * 9)
//     if (board[choice] !== '') {rollAgain()}
//     document.getElementById(choice)
//     .innerHTML +=
//     'O'
//     board[choice] = 'O'
//     console.log(choice)
// }

function placeO() {
    let choice = Math.floor(Math.random() * 9)
    while (board[choice] !== '') {
        choice = Math.floor(Math.random() * 9)
    }
    document.getElementById(choice).innerHTML += 'O'
    board[choice] = 'O'

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

space0.addEventListener('click', function(){placeX(0), placeO()})

space1.addEventListener('click', function(){placeX(1), placeO()})

space2.addEventListener('click', function(){placeX(2), placeO()})

space3.addEventListener('click', function(){placeX(3), placeO()})

space4.addEventListener('click', function(){placeX(4), placeO()})

space5.addEventListener('click', function(){placeX(5), placeO()})

space6.addEventListener('click', function(){placeX(6), placeO()})

space7.addEventListener('click', function(){placeX(7), placeO()})

space8.addEventListener('click', function(){placeX(8), placeO()})