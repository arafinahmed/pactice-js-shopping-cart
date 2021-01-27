totalSubtotal();
let myUpdateDictionary = [
    {
        btn: 'iphone-plus',
        countID: 'iphone-count',
        priceID: 'iphone-price',
        a: 1,
        singlePrice: 1219
    }, 
    {
        btn: 'iphone-minus',
        countID: 'iphone-count',
        priceID: 'iphone-price',
        a: -1,
        singlePrice: 1219
    },
    {
        btn: 'case-plus',
        countID: 'case-count',
        priceID: 'case-price',
        a: 1,
        singlePrice: 59
    },
    {
        btn: 'case-minus',
        countID: 'case-count',
        priceID: 'case-price',
        a: -1,
        singlePrice: 59
    },
];
let inputEvent = ['iphone-count', 'case-count'];

for (let i = 0; i < myUpdateDictionary.length; i++) {
    const element = myUpdateDictionary[i];
    const Btn = document.getElementById(element.btn);
    Btn.addEventListener('click', function(){
        updatePrice(element.countID, element.priceID, element.a, element.singlePrice);
    });    
}

//this is for manual input
for (let i = 0; i < inputEvent.length; i++) {
    const element = inputEvent[i];
    const iphoneCount = document.getElementById(element);
    if(element=='iphone-count'){
        iphoneCount.addEventListener('input', function(e){
            updatePrice('iphone-count','iphone-price', 0, 1219);
        });
    }
    else if(element=='case-count'){
        iphoneCount.addEventListener('input', function(e){
            updatePrice('case-count','case-price', 0, 59);
        });
    }
}

//update price function // countID, priceID, a, singlePrice
function updatePrice(countID, priceID, a, singlePrice){
    let count = parseFloat(document.getElementById(countID).value) + a;
    if(count<0){
        count = 0;
    }
    else if(!Number.isInteger(count)){
        count = 0;
    }
    document.getElementById(countID).value = count;
    const iphonePrice = count*singlePrice;
    document.getElementById(priceID).innerText = iphonePrice;
    totalSubtotal();
}


//total and sub total
function totalSubtotal(){
    console.log(100);
    let subTotal = 0;
    let total = 0;
    let tax = 0;
    const iphonePrice = parseFloat(document.getElementById('iphone-price').innerText);
    const casePrice = parseFloat(document.getElementById('case-price').innerText);
    subTotal = iphonePrice + casePrice;
    tax = Math.floor(subTotal*.15);
    total = tax + subTotal;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}
