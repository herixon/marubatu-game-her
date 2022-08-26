const toInnerText = (x,y) => {
    let cellId = "cell"+x+y;
    let cell = document.getElementById(cellId);
    let innerText = cell.innerText;
    return innerText;
}
const gameEnd = () => {
    let check = new Array;
    let checkCell;
    for(let i=0;i<=2;i++){
        for(let j=0;j<=2;j++){
            check.push(toInnerText(i,j));
        }
        if(check[0]==check[1] && check[1]==check[2] && check[0] != ""){
            alert(check[0] + " の勝ち");
        }
        console.log(check);
        check = [];
    }
    for(j=0;j<=2;j++){
        for(i=0;i<=2;i++){
            check.push(toInnerText(i,j));
        }
        if(check[0]==check[1] && check[1]==check[2] && check[0] != ""){
            alert(check[0] + " の勝ち");
        }
        check = [];
    }
    if(toInnerText(0,0)==toInnerText(1,1)&&toInnerText(1,1)==toInnerText(2,2)&&toInnerText(0,0)!=""){
        alert(toInnerText(0,0) + "の勝ち");
    }
    if(toInnerText(0,2)==toInnerText(1,1)&&toInnerText(1,1)==toInnerText(2,0)&&toInnerText(0,2)!=""){
        alert(toInnerText(0,2) + "の勝ち");
    }
}
let tx = "〇";
    
document.getElementById("inputWhich").innerText = tx + " の番";
const inputMark=(e)=>{
    if(e.target.innerText==""){
        e.target.innerText = tx;
        if(tx=="〇"){
            tx = "✕";
        }else if(tx=="✕"){
            tx = "〇";
        }
        gameEnd();
    }else{
        alert("そのマスは既に埋まっています。");
    }
    document.getElementById("inputWhich").innerText = tx + " の番";
}
let i, j;
let tbl = document.createElement("table");
tbl.border="1";
tbl.className="gameTable";
for(i=0;i<=2;i++){
    let tr = document.createElement("tr");
    for(j=0;j<=2;j++){
        let td = document.createElement("td");
        td.id="cell"+i+j;
        td.onclick=inputMark;
        tr.appendChild(td);
    }
    tbl.appendChild(tr);
}
document.getElementById("field").appendChild(tbl);