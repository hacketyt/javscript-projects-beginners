const hexColorCodes = [0, 1, 2, 3, 4, 5, 6 ,7 , 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexCode; 
function RandomColor(){
    let randomColor = "#";
    for(let i=0; i<6; i++){
        // randomColor = randomColor + hexColorCodes[randomNumbers()];
        randomColor = randomColor + hexColorCodes[Math.floor(Math.random() * hexColorCodes.length)];
    }
    return randomColor;
}

document.getElementById("btnRandom").addEventListener("click", function(){
    const color = RandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("hex").textContent = color;
    hexCode = color;
});

document.getElementById("hex").addEventListener("click", function(){
    navigator.clipboard.writeText(hexCode);
});

function randomNumbers(){
    return Math.floor(Math.random() * hexColorCodes.length);
}
