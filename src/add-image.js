import kiwi from './image-kiwi.jpeg';
import altText from './altText.txt';

function addImage() {
    const image = document.createElement('img');
    image.alt = altText;
    image.width = 300;
    image.src = kiwi;

    const body = document.querySelector('body');
    body.appendChild(image);
}

export default addImage;