const sketchDiv = document.querySelector('#sketch-container');


const createDiv = (numDivs) =>{
    
    for(let i = 0; i<numDivs; i++){
        let newDiv = document.createElement('div');
        for(let j = 0; j<numDivs; j++){
            let innerDiv = document.createElement('div');
            innerDiv.innerHTML='.';
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }


}
createDiv(16);


        
        