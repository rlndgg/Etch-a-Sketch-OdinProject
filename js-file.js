

const container = document.querySelector('#container');

for (let i = 0; i < 16 ; i++) {

    const content = document.createElement('div');

    content.classList.add('flexdiv');

  //  content.textContent = `${i+1}`;
    

    container.appendChild(content);
}

const containers = document.querySelectorAll('.flexdiv');

containers.forEach( (container) => {

    container.addEventListener('mouseover', () => {

        container.classList.add('mouseoverdiv');   
    });


});

function prmptUser () {
    let rowsAsk = window.prompt("How many rows will the grid have? (limit: 100)",'10');
    let columnAsk = window.prompt("How many columns will the grid have? (limit: 100)",'10');
    
    const container = document.querySelector('#container');
    if (container !== null) { container.remove();};

    createGrid(rowsAsk,columnAsk);
    return;
}

const button = document.querySelector('button');
    let returnArray = Array(2);
    button.addEventListener("click",prmptUser);

function createGrid (rows,columns) {
    if (  document.querySelector('#newContainer') !== null) {
        const newContainer = document.querySelector('#newContainer');
        newContainer.remove(); }

    const container = document.createElement('div');
    container.setAttribute('id','newContainer');
    document.body.appendChild(container);
    let counter = 1;

    for (let j = 0; j < rows; j++){
        const row = document.createElement('div');
        row.classList.add('row');
        
        
        for (let k = 0; k < columns; k++){

            const cell = document.createElement("div");
            cell.classList.add('griditem');
            
            cell.addEventListener('mouseover', () => {

                cell.classList.add('mouseoverdiv');   
            });


 //           cell.textContent = `${counter}`;
            counter++
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
  

};



/*
    const container = document.querySelector('#container');

    for (let i = 0; i < returnArray[1] ; i++) {
    
        const content = document.createElement('div');
    
        content.classList.add('flexdiv');
    
        content.textContent = `${i+1}`;
        
    
        container.appendChild(content);
    }

   /* container.addEventListener('mouseout', () => {

        container.classList.remove('mouseoverdiv');   
    }); */