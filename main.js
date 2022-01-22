const sketchDiv = document.querySelector('#sketch-container');
const gridVal = document.querySelector('#gridVal');

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
                innerDiv.setAttribute('style',`background-color:${colorSelect.value};`);
                dimensionSet();
            });
            
            newDiv.appendChild(innerDiv);
            
        }
        sketchDiv.appendChild(newDiv);
    }

}
createDiv(16);

const colorSelect = document.querySelector('#colorSelect');
colorSelect.addEventListener("change", () => colorSelect.value);

const eraseButton = document.querySelector('#eraseButton');
eraseButton.addEventListener("click", () => colorSelect.value = '#FFFFFF');

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener("click", () => {
    createDiv(document.querySelector("#gridSize").value);
});

        
        