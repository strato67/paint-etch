const sketchDiv = document.querySelector('#sketch-container');
//const gridSize = document.querySelector('#gridSize');
const gridVal = document.querySelector('#gridVal');
const colorSelect = document.querySelector('#colorSelect');

const createDiv = (numDivs) =>{

    const containDimension = sketchDiv.clientWidth;
    gridVal.innerHTML = '';
    sketchDiv.innerHTML = '';

    gridVal.innerText=`${numDivs} x ${numDivs} `;


    for(let i = 0; i<numDivs; i++){
        const newDiv = document.createElement('div');
        

        newDiv.style.width=`${containDimension}px`;
        newDiv.style.height=`${containDimension/numDivs}px`;
        
        for(let j = 0; j<numDivs; j++){
            const innerDiv = document.createElement('div');
            innerDiv.className = 'innerDiv';

            const dimensionSet = () =>{
                innerDiv.style.width=`${containDimension/numDivs}px`;  
                innerDiv.style.height=`${containDimension/numDivs}px`;     
            }
            dimensionSet();
            
            innerDiv.addEventListener('mouseover',()=>{
                innerDiv.setAttribute('style',`background-color:${colorSetter().value};`);
                dimensionSet();
            });
            
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }

}

const colorSetter = () =>{
    let color = document.querySelector('#colorSelect');
    return color;
}


colorSelect.addEventListener("change", colorSetter);


createDiv(16);
colorSetter();

        
        