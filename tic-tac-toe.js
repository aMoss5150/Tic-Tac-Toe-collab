window.addEventListener("DOMContentLoaded", () => {
    //!!               VARIABLES                  //

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

    console.log('counter:', counter)

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
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s0.appendChild(o)
            }
        };
    });

    const s1 = document.querySelector('#square-1');
    s1.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s1.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s1.appendChild(o)
            }
        };
    });

    const s2 = document.querySelector('#square-2');
    s2.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s2.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s2.appendChild(o)
            }
        };
    });


    const s3 = document.querySelector('#square-3');
    s3.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s3.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s3.appendChild(o)
            }
        };
    });



    const s4 = document.querySelector('#square-4');
    s4.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s4.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s4.appendChild(o)
            }
        };
    });


    const s5 = document.querySelector('#square-5');
    s5.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s5.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s5.appendChild(o)
            }
        };
    });


    const s6 = document.querySelector('#square-6');
    s6.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s6.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s6.appendChild(o)
            }
        };
    });


    const s7 = document.querySelector('#square-7');
    s7.addEventListener("click", event => {
        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s7.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s7.appendChild(o)
            }
        };
    });


    const s8 = document.querySelector('#square-8');
    s8.addEventListener("click", event => {

        if (!event.target.children.length) {
            counter++;

            if (counter % 2 === 0) {
                let x = document.createElement('img');
                x.setAttribute("src", "images/player-x.svg")
                s8.appendChild(x)
            } else {
                let o = document.createElement('img');
                o.setAttribute("src", "images/player-o.svg")
                s8.appendChild(o)
            }
        };
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