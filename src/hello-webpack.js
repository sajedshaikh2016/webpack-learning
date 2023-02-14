import _ from 'lodash';
import './style.scss';

function helloWebpack() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const helloClass = 'hello';

    element.classList.add(helloClass);

    return element;
}

document.body.appendChild(helloWebpack());

export default helloWebpack;