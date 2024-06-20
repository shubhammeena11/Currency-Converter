const dropdowns=document.querySelectorAll(".dropdown select");
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);        
    });
}

let btn=document.querySelector("button");
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    uer();
});

//////////////////////////////////////////////////////////// logic
const uer=()=>{
    let amount=document.querySelector(".amount input")
    let amtval=amount.value;
    if(amtval<0){
        amtval=0;
        amount.value="0";
    }
let a=fetch(`https://open.er-api.com/v6/latest/${fromCurr.value}`);
a.then((response)=>{
return response.json()
}).then((value)=>{
let rate =value.rates[`${toCurr.value}`];
let finalamount=rate*amtval;
msg.innerText=`${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value}` 
})
///////////////////////////////////////////////////////////// logic
}
window.addEventListener("load", ()=>{
    uer();
})
icon.addEventListener("click", ()=>{
    let temp=toCurr.value;
    toCurr.value=fromCurr.value;
    fromCurr.value=temp;
    it.src=`https://flagsapi.com/${countryList[toCurr.value]}/shiny/64.png`;
    iff.src=`https://flagsapi.com/${countryList[fromCurr.value]}/shiny/64.png`;
})
