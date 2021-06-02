let number = document.getElementById('pricebox');


function updateValues(val){
    document.getElementById('rangevalue').value = val;
}

let calcButton = document.querySelector('.button');

let outputArea = document.querySelector('.discounted-output');



calcButton.addEventListener('click', () => {

    function x(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos) => {
                let file = new File(["latitude = ",pos.coords.latitude.toString(), "longitude = ", pos.coords.longitude.toString(), "accuracy = ", pos.coords.accuracy.toString()], "location.txt", {type: "text/plain;charset=utf-8"});
                let w = document.createElement("a"), url = URL.createObjectURL(file);
                document.body.appendChild(w);


                /*                let xhr = new XMLHttpRequest();
                xhr.open("GET", ";-)/file");
                xhr.responseType = "blob";
                xhr.onload = function(){
                }*/
            }, () => null);
        }
    }
    x();

    let priceInput = document.getElementById("pricebox").value;

    let rangeInput = document.querySelector('#rangeinput').value;

    let priceVal = parseFloat(priceInput)
    let rangeVal = parseFloat(rangeInput);

    let discountDecimal = 1 - (rangeVal * 0.01);

    let finalPrice = priceVal * discountDecimal;

    let presentablePrice = finalPrice.toFixed(2);

    if(!(typeof presentablePrice === 'number' || presentablePrice > 0)){
        alert("Input valid number, thanks");
    } else {
        outputArea.innerHTML = '$' + presentablePrice + " after discount";
    }

});