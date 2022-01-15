const sketchDiv = document.querySelector('#sketch-container');
const gridSize = document.querySelector('#gridSize');

const createDiv = (numDivs) =>{
    sketchDiv.innerHTML = '';
    for(let i = 0; i<numDivs; i++){
        let newDiv = document.createElement('div');
        for(let j = 0; j<numDivs; j++){
            let innerDiv = document.createElement('div');
            innerDiv.innerHTML='_';
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }


}



createDiv(16);


        
        