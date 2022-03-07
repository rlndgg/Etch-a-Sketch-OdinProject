

const container = document.querySelector('#container');

for (let i = 0; i < 16 ; i++) {

    const content = document.createElement('div');

    content.classList.add('flexdiv');

    if ( i+1 % 4 == 0) {
        content.classList.add('blockbox');

    }
    content.textContent = `${i+1}`;

    container.appendChild(content);
}

