const btnGeneraGridEl = document.querySelector("#genera-grid");


btnGeneraGridEl.addEventListener("click", function () {
    const selectNumSquareEl = document.querySelector("[name=numSquare]");
    const outputGridEl = document.querySelector(".my-grid-output");


    const numSquare=(parseInt(selectNumSquareEl.value)) ;
    const numRiga=Math.sqrt(numSquare,2)
    outputGridEl.innerHTML="";
    for(let i=0;i<numSquare;i++){
        const newCell=document.createElement("div");
        newCell.classList.add("my-square");
        newCell.style.width=`calc(100% / ${numRiga})`;
        outputGridEl.append(newCell);
    }
    



})