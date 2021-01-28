function handleProductChange(product, counter, price){
    const caseInput = document.getElementById(product+'-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount + counter;
    if(caseNewCount<0){
        caseNewCount = 0;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * price;
    document.getElementById(product+'-total').innerText = '$'+caseTotal;
}


// function handleProductChange(counter){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount + counter;
//     if(caseNewCount<0){
//         caseNewCount = 0;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$'+caseTotal;
// }

// function phoneProductChange(counter){
//     const caseInput = document.getElementById('phone-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount + counter;
//     if(caseNewCount<0){
//         caseNewCount = 0;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$'+caseTotal;
// }