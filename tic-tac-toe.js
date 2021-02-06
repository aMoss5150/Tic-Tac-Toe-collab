window.addEventListener("DOMContentLoaded", () => {

    //! 0, 1, 2
    //! 3, 4, 5
    //! 6, 7, 8



    //!!               VARIABLES                  //
    let winner = document.querySelector('#game-status');
    console.log('winner:', winner)
    let counter = 1;
    let s0Val = ''
    let s1Val = ''
    let s2Val = ''
    let s3Val = ''
    let s4Val = ''
    let s5Val = ''
    let s6Val = ''
    let s7Val = ''
    let s8Val = ''

    // let w = [s0Val, s1Val, s2Val, s3Val, s4Val, s5Val, s6Val, s7Val, s8Val]


    // let decideWinner = () => {
    //     for (let i = 0; i < w.length; i++) {
    //     }
    //     //!!X--WINS
    //     if (w[0] === 'x' && w[1] === 'x' && w[2] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[3] === 'x' && w[4] === 'x' && w[5] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[6] === 'x' && w[7] === 'x' && w[8] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[0] === 'x' && w[3] === 'x' && w[6] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[1] === 'x' && w[4] === 'x' && w[7] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[2] === 'x' && w[5] === 'x' && w[8] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[0] === 'x' && w[4] === 'x' && w[8] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     if (w[2] === 'x' && w[4] === 'x' && w[6] === 'x') {
    //         winner.innerText = "Winner: X"
    //     }
    //     //!!Y--WINS

    //     if (w[0] === 'o' && w[1] === 'o' && w[2] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[3] === 'o' && w[4] === 'o' && w[5] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[6] === 'o' && w[7] === 'o' && w[8] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[0] === 'o' && w[3] === 'o' && w[6] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[1] === 'o' && w[4] === 'o' && w[7] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[2] === 'o' && w[5] === 'o' && w[8] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[0] === 'o' && w[4] === 'o' && w[8] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    //     if (w[2] === 'o' && w[4] === 'o' && w[6] === 'o') {
    //         winner.innerText = "Winner: O"
    //     }
    // }

    // console.log(winnerArray)

    // console.log('counter:', counter)

    // const x = document.createElement('img');
    // x.setAttribute("src", "images/player-x.svg")

    // const o = document.createElement('img');
    // o.setAttribute("src", "images/player-o.svg")

    const s0 = document.querySelector('#square-0');
    s0.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s0.appendChild(x)
                s0val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s0.appendChild(o)
                s0val = "o"
            }
        };
        decideWinner();
    });

    const s1 = document.querySelector('#square-1');
    s1.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s1.appendChild(x)
                s1val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s1.appendChild(o)
                s1val = "o"
            }
        };
        decideWinner();
    });

    const s2 = document.querySelector('#square-2');
    s2.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s2.appendChild(x)
                s2val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s2.appendChild(o)
                s2val = "o"
            }
        };
        decideWinner();
    });


    const s3 = document.querySelector('#square-3');
    s3.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s3.appendChild(x)
                s3val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s3.appendChild(o)
                s3val = "o"
            }
        };
        decideWinner();
    });



    const s4 = document.querySelector('#square-4');
    s4.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s4.appendChild(x)
                s4val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s4.appendChild(o)
                s4val = "o"
            }
        };
        decideWinner();
    });


    const s5 = document.querySelector('#square-5');
    s5.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s5.appendChild(x)
                s5val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s5.appendChild(o)
                s5val = "o"
            }
        };
        decideWinner();
    });


    const s6 = document.querySelector('#square-6');
    s6.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s6.appendChild(x)
                s6val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s6.appendChild(o)
                s6val = "o"
            }
        };
        decideWinner();
    });


    const s7 = document.querySelector('#square-7');
    s7.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s7.appendChild(x)
                s7val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s7.appendChild(o)
                s7val = "o"
            }
        };
        decideWinner();
    });


    const s8 = document.querySelector('#square-8');
    s8.addEventListener("click", event => {

        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s8.appendChild(x)
                s8val = "x"
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s8.appendChild(o)
                s8val = "o"
            }
        };
        decideWinner();
    });



    // let allSquares = document.querySelectorAll('.square')
    //

    // allSquares.forEach(sqr => {
    //     sqr.addEventListener("click", event => {
    //         // event.preventDefault();
    //         if (!event.target.children.length) {
    //             event.target.appendChild(o);
    //         }


    //     })
    // });






});
