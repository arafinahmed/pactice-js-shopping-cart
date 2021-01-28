


function handleProductChange(counter){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount + counter;
    if(caseNewCount<0){
        caseNewCount = 0;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$'+caseTotal;
}