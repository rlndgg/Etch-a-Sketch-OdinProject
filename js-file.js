

const container = document.querySelector('#container');

for (let i = 0; i < 16 ; i++) {

    const content = document.createElement('div');

    content.classList.add('flexdiv');

    content.textContent = `${i+1}`;
    

    container.appendChild(content);
}

const containers = document.querySelectorAll('.flexdiv');

containers.forEach( (container) => {

    container.addEventListener('mouseover', () => {

        container.classList.add('mouseoverdiv');   
    });

    container.addEventListener('mouseout', () => {

        container.classList.remove('mouseoverdiv');   
    });
});