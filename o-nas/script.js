// Parametry
let activeElement = 0;

// Pobieramy 4 elementy na ktorych bedziemy pracowac
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

// Informacje w tablicach o elementach podmienianych
const colorImages = ['i1.png', 'i2.png', 'i3.png'];
const grayImages = ['i1a.png', 'i2a.png', 'i3a.png'];
const names = ['Przemysław Zalewski', 'Iga Sylwestrowicz', 'Damian Woźniak'];
const professions = ['Front-end developer', 'Back-end developer', 'Content manager'];

function changeElement() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}

setInterval(changeElement, 8000)