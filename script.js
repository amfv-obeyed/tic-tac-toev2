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
//     if (board[choice] !== '') {return}
//     document.getElementById(choice)
//     .innerHTML +=
//     'O'
//     board[choice] = 'O'
//     console.log(choice)
// }

const space0 = document.getElementById('0')
const space1 = document.getElementById('1')
const space2 = document.getElementById('2')
const space3 = document.getElementById('3')
const space4 = document.getElementById('4')
const space5 = document.getElementById('5')
const space6 = document.getElementById('6')
const space7 = document.getElementById('7')
const space8 = document.getElementById('8')

space0.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(0)
    })

space1.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(1)
    })

space2.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(2)
    })

space3.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(3)
    })

space4.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(4)
    })

space5.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(5)
    })

space6.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(6)
    })

space7.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(7)
    })

space8.addEventListener('click', function () {
        console.log('space 0 was clicked')
        placeX(8)
    })