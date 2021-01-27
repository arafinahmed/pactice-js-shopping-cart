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
]
for (let i = 0; i < myUpdateDictionary.length; i++) {
    const element = myUpdateDictionary[i];
    const Btn = document.getElementById(element.btn);
    Btn.addEventListener('click', function(){
        updatePrice(myUpdateDictionary[0]);
    });
    
}
//iphone price plus
// const iphonePlusBtn = document.getElementById('iphone-plus');
// iphonePlusBtn.addEventListener('click', function(){
//     updatePrice(myUpdateDictionary[0]);
// });

// //iphone price minus
// const iphoneMinusBtn = document.getElementById('iphone-minus');
// iphoneMinusBtn.addEventListener('click', function(){
//     updatePrice(myUpdateDictionary[1]);
// });

//case price plus


//update price function // countID, priceID, a, singlePrice
function updatePrice(countID, priceID, a, singlePrice){
    let count = parseFloat(document.getElementById(countID).value) + a;
    if(count<0){
        count = 0;
    }
    document.getElementById(countID).value = count;
    const iphonePrice = count*singlePrice;
    document.getElementById(priceID).innerText = iphonePrice;
}