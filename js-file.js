

const container = document.querySelector('#container');

for (let i = 0; i < 16 ; i++) {

    const content = document.createElement('div');

    content.classList.add('flexdiv');

    content.textContent = `${i+1}`;
    

    container.appendChild(content);
}

