const sketchDiv = document.querySelector('#sketch-container');
const gridSize = document.querySelector('#gridSize');

const createDiv = (numDivs) =>{
    sketchDiv.innerHTML = '';
    const scale = 100/numDivs;
    for(let i = 0; i<numDivs; i++){
        let newDiv = document.createElement('div');
        
        for(let j = 0; j<numDivs; j++){
            let innerDiv = document.createElement('div');
            innerDiv.style.padding = `${scale}px`;
            
            innerDiv.innerText='_';
            
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }


}



createDiv(16);


        
        