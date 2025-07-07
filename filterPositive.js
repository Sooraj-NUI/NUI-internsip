let data =  [-14, 4, 5, -2, 76]

function filterPositive(){
    const positiveNumbers = data.filter(data=> data>0)
    return(positiveNumbers)
}
console.log(filterPositive())