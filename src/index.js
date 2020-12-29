import { join } from 'lodash-es';

const isServer = false;
const isBrowser = !isServer;

function component() {
    const element = document.createElement('div');

    if (!isBrowser) {
        console.log('code for NodeJS');
        element.innerHTML = join(['Hello', 'webpack'], ' ');
    } else {
        console.log('code for Browsers');
        element.innerHTML = 'Ok';
    }

    return element;
}

document.body.appendChild(component());