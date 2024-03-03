const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";//

const drompDowns = document.querySelectorAll(".dropdown select");

let fromCurr = document.querySelector(".from select");
let toCurr   = document.querySelector(".to select");

window.addEventListener("load", ()=>{
    uexcahnge();
});


for(let select of drompDowns){
    for(let code in countryList){
        let newOption = document.createElement("Option");
        newOption.innerText = code;
        newOption.value = code;
        if (select.name ==="from" && code==="USD"){
            newOption.selected = "selected";
        }
        if (select.name ==="to" && code==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);

        
    }    
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag=(element)=>{
    console.log(element); 
    let x =element.parentElement.querySelector("img");
    x.src = `https://flagsapi.com/${countryList[element.value]}/flat/64.png`;   

}
let message = document.querySelector(".msg");
let btn = document.querySelector("button");
// let fromCurr = document.getElementsByName("from");
// console.dir(fromCurr.options[fromCurr.selectedIndex];
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault(); //stop ppage refresh which happens on btn pressing by default in form
    uexcahnge();
    // let amount = document.querySelector(".amount input");
    // let amtVal=amount.value;
    // if (amtVal == "" || amtVal<1){
    //     amtVal = 1;
    //     amount.value="1";
    // } 
    // console.log(fromCurr.value,toCurr.value)
    // let url = `${base_url}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // console.log(url)
    // let response = await fetch(url);
    // data = await response.json();
    // // console.log(data[toCurr.value.toLowerCase()]);
    // total_amount = data[toCurr.value.toLowerCase()]*amtVal;
    // let message = document.querySelector(".msg");
    // message.innerText=`${fromCurr.value} ${amtVal} = ${toCurr.value} ${total_amount} \n ( ${fromCurr.value} 1 = ${toCurr.value} ${data[toCurr.value.toLowerCase()]} )`;
});

const uexcahnge = async ()=>{
    let amount = document.querySelector(".amount input");
    let amtVal=amount.value;
    if (amtVal == "" || amtVal<1){
        amtVal = 1;
        amount.value="1";
    } 
    console.log(fromCurr.value,toCurr.value)
    let url = `${base_url}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    console.log(url)
    let response = await fetch(url);
    data = await response.json();
    // console.log(data[toCurr.value.toLowerCase()]);
    total_amount = data[toCurr.value.toLowerCase()]*amtVal;
    let message = document.querySelector(".msg");
    message.innerText=`${fromCurr.value} ${amtVal} = ${toCurr.value} ${total_amount} \n ( ${fromCurr.value} 1 = ${toCurr.value} ${data[toCurr.value.toLowerCase()]} )`;
}



