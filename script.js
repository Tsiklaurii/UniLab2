function fetchLeftJoke() {
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) => {
            const leftJoke = document.getElementById("left");

            leftJoke.innerHTML = `
            <p id="leftp">${data.quote}</p>`;
        })
        .catch((error) => {
            console.log(error, "left error");
        })
}

function fetchRightJoke() {
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) => {
            const rightJoke = document.getElementById("right");

            rightJoke.innerHTML = `
            <p id="rightp">${data.quote}</p>`;
        })
        .catch((error) => {
            console.log(error, "right error");
        })
}

function wordsDifference() {
    const word = document.getElementById("word");
}


function lengthDifference() {
    const lenght = document.getElementById("lenght");
}


function match() {
    const match = document.getElementById("match");
}