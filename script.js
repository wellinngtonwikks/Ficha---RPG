const atributos = ["Dex","Agi","Cons","For","Int","Sab","Caris","Intim"];
let attrBox = document.getElementById("attrs");

atributos.forEach(a=>{
    let d=document.createElement("div");
    d.className="attr";
    d.innerHTML = `
    <b>${a}</b><br>
    Pontos: <span id="p_${a}">0</span>
    <button onclick="add('${a}')">+</button>
    <button onclick="sub('${a}')">-</button><br>
    Mod: <span id="m_${a}">0</span>
    `;
    attrBox.appendChild(d);
});

function calc(a){
    let p=parseInt(localStorage.getItem("p_"+a)||0);
    let m=Math.floor(p/4);
    document.getElementById("p_"+a).innerText=p;
    document.getElementById("m_"+a).innerText=m;
}

function add(a){
    let p=parseInt(localStorage.getItem("p_"+a)||0);
    localStorage.setItem("p_"+a, p+1);
    calc(a);
}
function sub(a){
    let p=parseInt(localStorage.getItem("p_"+a)||0);
    if(p>0){
        localStorage.setItem("p_"+a, p-1);
        calc(a);
    }
}

function save(){
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("notes", document.getElementById("notes").value);
    alert("Salvo!");
}

window.onload = ()=>{
    document.getElementById("nome").value = localStorage.getItem("nome")||"";
    document.getElementById("notes").value = localStorage.getItem("notes")||"";
    atributos.forEach(calc);
};
