
function divCreator(rows, cols) {
    for (let i = 0;i<rows;i++) {
        for (let x = 0;x<cols;x++){
            //create div every loop, add pixel class
            const div = document.createElement('div');
            div.classList.add('pixel')
            //set width and height of each pixel to one fraction of the defined grid size
            let width = (1/cols) * 960;
            let height = width;
            //add css styles
            div.style.cssText = `width: ${width}px; height: ${height}px; display: inline-block; background: grey;`;
            //add listener to get drawing effect when mouse is hovering over div
            div.addEventListener('mouseenter', () => {
                div.style.background = 'blue';
            });
            
            container.appendChild(div);

        }
        
    }
    
}


function reset(){
    //check if contianer has children, if so clear screen
    if (container.hasChildNodes()) {
        const children = container.querySelectorAll('.pixel');
        children.forEach((x) => {
            x.remove();
        });
    }
    //prompt user for their desired grid size
    let grid = prompt("Please enter the grid size that you would like: ");
    
    divCreator(grid, grid);
}

function startUp() {
    const container = document.getElementById("container");
    const resetBut = document.querySelector("button");
    resetBut.onclick = () => reset();
    //initial setup 
    reset();
}

startUp()

