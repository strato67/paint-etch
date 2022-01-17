const sketchDiv = document.querySelector('#sketch-container');
const gridSize = document.querySelector('#gridSize');
const gridVal = document.querySelector('#gridVal');

const createDiv = (numDivs) =>{

    gridVal.innerHTML = '';
    sketchDiv.innerHTML = '';

    gridVal.innerText=`${numDivs} x ${numDivs} `;
    const scale = 100/numDivs;

    for(let i = 0; i<numDivs; i++){
        let newDiv = document.createElement('div');
        
        for(let j = 0; j<numDivs; j++){
            let innerDiv = document.createElement('div');
            innerDiv.className = 'innerDiv';

            gridFormat(innerDiv,scale);
            
            innerDiv.addEventListener('mouseover',()=>{
                innerDiv.setAttribute('style','background-color:black;');
                gridFormat(innerDiv,scale);
            });
            
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }


}

const gridFormat = (div,scale) =>{
    div.style.padding = `${scale}px `;     
    div.innerText='_';
}


createDiv(16);


        
        