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
    calculateTotal();
}


function calculateTotal(){
    const phoneCount = parseInt(document.getElementById('phone-count').value)
    const caseCount = parseInt(document.getElementById('case-count').value)
    const subTotal = phoneCount*1219 + caseCount*59;
    const tax = Math.floor(subTotal*0.1);
    const total = Math.floor( subTotal*1.1);
    document.getElementById('subtotal').innerText = "$"+subTotal;
    document.getElementById('tax').innerText = '$'+tax;
    document.getElementById('total').innerText = '$'+total;
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