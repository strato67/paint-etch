const sketchDiv = document.querySelector('#sketch-container');
const gridSize = document.querySelector('#gridSize');
const gridVal = document.querySelector('#gridVal');


const createDiv = (numDivs) =>{

    const containDimension = sketchDiv.clientWidth;
    gridVal.innerHTML = '';
    sketchDiv.innerHTML = '';

    gridVal.innerText=`${numDivs} x ${numDivs} `;


    for(let i = 0; i<numDivs; i++){
        let newDiv = document.createElement('div');
        

        newDiv.style.width=`${containDimension}px`;
        newDiv.style.height=`${containDimension/numDivs}px`;
        
        for(let j = 0; j<numDivs; j++){
            let innerDiv = document.createElement('div');
            innerDiv.className = 'innerDiv';

            innerDiv.style.width=`${containDimension/numDivs}px`;  
            innerDiv.style.height=`${containDimension/numDivs}px`;              
            
            innerDiv.addEventListener('mouseover',()=>{
                innerDiv.setAttribute('style','background-color:black;');
                innerDiv.style.width=`${containDimension/numDivs}px`;  
                innerDiv.style.height=`${containDimension/numDivs}px`; 
            });
            
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }

}



createDiv(16);


        
        