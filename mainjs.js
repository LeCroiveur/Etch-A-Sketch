const container = document.getElementById('container');

function randColors() {
    let hexaColor = "0123456789ABCDEF"
    let hashTag = "#"
    let colOp = "";
    for (let i = 0; i < 6; i++) {
        colOp += hexaColor[Math.floor(Math.random() * 16)];
    };
    let newColor = hashTag + colOp;
    console.log(newColor);
    return newColor;

}

function addRowCol() {
    let x = 0;
    let y = 0;
    let btnMany = document.getElementById("question");
    btnMany.addEventListener('click', () => {
        let a = prompt("Enter first number: ", "0");
        if (parseInt(a) > 100) {
            alert("Choose an other value inferior to 100")

        } else {
            document.getElementById("container").textContent = "";
            x = parseInt(a);
            y = parseInt(a);
        }
        makeRows(x, y);
        hoverTheRainbow();

    });
};


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

    };
};



function hoverTheRainbow() {
    let items = document.querySelectorAll(".grid-item");
    items.forEach(item => {

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randColors();
            let z = document.querySelectorAll(".grid-item");
            const nombreEle = document.getElementById('container');
            let taille = nombreEle.childNodes.length;
            let dixPourCent = Math.floor((taille * 10) / 100);

            for (let i = 0; i < dixPourCent; i++) {
                z[Math.floor(Math.random() * taille)].style.backgroundColor = "black";

            };

        });
    });
};

addRowCol();


