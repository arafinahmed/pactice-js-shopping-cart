function handleProductChange(product, counter, price){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount + counter;
    if(productNewCount<0){
        productNewCount = 0;
    }
    productInput.value = productNewCount;
    const productTotal = productNewCount * price;
    document.getElementById(product+'-total').innerText = '$'+productTotal;
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